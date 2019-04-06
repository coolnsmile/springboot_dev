package com.apress.spring.web;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.*;





import java.util.*;
import java.io.*;
import java.nio.*;
import java.nio.file.Path;
import java.nio.file.Paths;


import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;
import java.text.SimpleDateFormat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.http.ResponseEntity;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;





import org.springframework.context.annotation.Configuration;

import com.apress.spring.domain.serverInfo;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.*;

import org.codehaus.*;
import org.json.simple.*;






@Component
@PropertySource("classpath:global.properties")
@Controller
@CrossOrigin("*")
public class ScmController {
    private static final Logger log = LoggerFactory.getLogger(ScmController.class);

    //key : ServerGroup_ServerName_ServerIP value = JSch Session Object
    private static ConcurrentHashMap<String, Session> sessionStorageMap = new ConcurrentHashMap<String, Session>();

    //key : ServerGroup_ServerName_ServerIP value = JSch Channel Object
    private static ConcurrentHashMap<String, ChannelExec> channelStorageMap = new ConcurrentHashMap<String, ChannelExec>();

    //key : ServerGroup_ServerName_ServerIP value = 0L---> filesize
    private static ConcurrentHashMap<String, Long> fileSizeMap = new ConcurrentHashMap<String, Long>();

    private static ConcurrentHashMap<String, Integer> fileSizeChangeCountMap = new ConcurrentHashMap<String, Integer>();

    private static ConcurrentHashMap<String, Integer> idIndexMap = new ConcurrentHashMap<String, Integer>();

    private static ConcurrentHashMap<String, Integer> fileMonitorCountMap = new ConcurrentHashMap<String, Integer>();

    private static ConcurrentHashMap<String, String> sessionFileMappingMap = new ConcurrentHashMap<String, String>();


    @RequestMapping(value = "/postData" , method=RequestMethod.POST)
    public @ResponseBody List<String> getCPUValue(@RequestBody List<serverInfo> info)
    {
        log.info("/postData : " + info);
        List<String> result = new ArrayList<String>();

        int monitoringCount = info.size();

        for(int i=0; i<monitoringCount; i++)
        {
            String tempKey = info.get(i).getServerGroup()+"_"+info.get(i).getServerName()+"_"+info.get(i).getServerIp();

            if(sessionStorageMap.get(tempKey)==null)
            {
                ServerCPUDataGen runnable = new ServerCPUDataGen(
                                                info.get(i).getServerGroup(),
                                                info.get(i).getServerName(),
                                                info.get(i).getServerIp(),
                                                info.get(i).getServerUser(),
                                                info.get(i).getServerPassword(),
                                                info.get(i).getServerPort(),
                                                info.get(i).getTime()
                                            );

                Thread vmstatThread = new Thread(runnable);

                vmstatThread.start();

            }
            else
            {
                fileMonitorCountMap.put(tempKey , fileMonitorCountMap.get(tempKey)+1);
            }

        }
    

    Runnable dyson = new sessionCleaner();
    Thread cleaner = new Thread(dyson);

    cleaner.start();

    while(true)
    {
        int tempFileCount = 0;

        try{
            Thread.sleep(1000);
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }

        for(int i=0; i<monitoringCount; i++)
        {
            String tempKey = info.get(i).getServerGroup()+"_"+info.get(i).getServerName()+"_"+info.get(i).getServerIp();

            if(sessionFileMappingMap.get(tempKey)!=null)
            {

                File tempFile = new File((String)sessionFileMappingMap.get(tempKey));

                if(tempFile.exists() && (tempFile.length() > 0))
                {
                    result.add(tempKey);
                    tempFileCount++;
                }
            }



        }
        if(tempFileCount == monitoringCount)
        {
            break;
        }

        result.clear();



    }

    return result;

    }

    class sessionCleaner implements Runnable{

        public sessionCleaner()
        {

        }

        public void run()
        {

            try{
                while(true)
                {
                    Thread.currentThread().setName("Dyson");

                    Thread.sleep(5000);

                    for(Map.Entry entry : fileMonitorCountMap.entrySet()){
                        log.info("key  : " + entry.getKey() + " value : " + entry.getValue());
                    }

                }
            }
            catch(Exception e)
            {
                e.printStackTrace();
            }




        }

    }



    class ServerCPUDataGen implements Runnable{

        String serverGroup;
        String serverName;
        String serverUser;
        String serverIp;
        String serverPassword;
        int serverPort;
        Date time;
        Session session = null;
        Channel channel = null;

        String output = "";
        InputStream input = null;
        BufferedWriter brw = null;

        
        public ServerCPUDataGen(String serverGroup, String serverName, String serverIp,String serverUser, String serverPassword, String serverPort, Date time)
        {
            this.serverGroup = serverGroup;
            this.serverName = serverName;
            this.serverIp  = serverIp;
            this.serverUser = serverUser;
            this.serverPassword = serverPassword;
            this.serverPort = Integer.parseInt(serverPort);
            this.time = time;
        }

        public void run(){

            try{

                JSch jsch = new JSch();

                log.info("serverUser : " + serverUser + " serverIp : " + serverIp + " serverPort : " + serverPort);
                log.info("serverPassword : " + serverPassword );

                session = jsch.getSession(serverUser, serverIp, serverPort);

                session.setPassword(serverPassword);

                java.util.Properties config = new Properties();
                config.put("StrictHostKeyChecking","no");
                session.setConfig(config);

                session.connect();

                channel = session.openChannel("exec");

                ChannelExec channelExec = (ChannelExec) channel;

                channelExec.setCommand("vmstat 5");

                input = channelExec.getInputStream();
                channelExec.connect(3000);
                byte[] buffer = new byte[100];
                int read;

                java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd_HHmmss");

                String startTimeString = formatter.format(this.time);

                String tempFileName =  this.serverGroup+"_"+this.serverName+"_"+this.serverIp+".log@5_"+startTimeString;
                String tempkey =   this.serverGroup+"_"+this.serverName+"_"+this.serverIp;

                sessionStorageMap.put(tempkey,session);

                channelStorageMap.put(tempkey,channelExec);

                fileSizeMap.put(tempkey,0L);
                fileSizeChangeCountMap.put(tempkey,0);

                idIndexMap.put(tempkey, -1);
                fileMonitorCountMap.put(tempkey,1);

                sessionFileMappingMap.put(tempkey, tempFileName);

                Thread.currentThread().setName(tempkey+"_"+fileMonitorCountMap.get(tempkey));

                Thread.currentThread().getId();

                File vmfile = new File(tempFileName);

                if(!vmfile.isFile()) vmfile.createNewFile();

                Path wiki_path = Paths.get(tempFileName);
                Charset charset = Charset.forName("UTF-8");

                brw = Files.newBufferedWriter(wiki_path, charset, StandardOpenOption.APPEND);

                while((read = input.read(buffer))>0){
                    output = new String(buffer, 0, read);

                    brw.write(output);
                    brw.flush();
                }


            }catch (IOException e)
            {
                e.printStackTrace();
            }
            catch (JSchException e)
            {
                e.printStackTrace();
            }
            finally{
                if(channel!=null)
                {
                    channel.disconnect();
                }

                if(session != null)
                {
                    session.disconnect();
                }

                try{ if(input != null) input.close(); }catch(IOException e){}

                try{ if(brw != null) brw.close(); }catch(IOException e){}




            }





        } // public void run


    } //ServerCPUDataGen

    @RequestMapping(value = "/graphData", method=RequestMethod.POST)
    public @ResponseBody Map graphData2(@RequestBody List<serverInfo> sessionInfo)
    {
        HashMap cpuInfo = new HashMap();

        BufferedReader br = null;
        File file = null;
        RandomAccessFile lastLineReadFile = null;

        for(int i=0; i<sessionInfo.size(); i++)
        {
            try{
                java.text.SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd_HHmmss");

                String startTimeString = formatter.format(sessionInfo.get(i).getTime());

                String tempKey = sessionInfo.get(i).getServerGroup()+"_"+sessionInfo.get(i).getServerName()+"_"+sessionInfo.get(i).getServerIp();
                
                String fileName = sessionFileMappingMap.get(tempKey);

                boolean is_second = false;
                String sLine = null;
                String tokenizedString[] = null;
                int id_index = 0;

                if(IdIndexMap.get(tempKey)==-1)
                {
                    file = new File(fileName);
                    br = new BufferedReader(new FileReader(file));

                    while( (sLine = br.readLine()) != null)
                    {
                        tokenizedString = getTokens2(sLine);
                        for(int z=0; z<tokenizedString.length; z++)
                        {
                            if( (tokenizedString[z].toString().trim() == "id") || (tokenizedString[z].toString().trim().equals("id")))
                            {
                                id_index = z;
                                idIndexMap.put(tempKey, id_index);
                                break;
                            }
                        }
                    }
                }
                else
                {
                    id_index = idIndexMap.get(tempKey);
                }



                lastLineReadFile = new RandomAccessFile(fileName,"r");

                long previousFileSize = fileSizeMap.get(tempKey);

                long fileSize = lastLineReadFile.length();

                if(fileSize == previousFileSize)
                {
                    fileSizeChangeCountMap.put(tempKey,
                                                fileSizeChangeCountMap.get(tempKey)+1
                                                );

                    if(fileSizeChangeCountMap.get(tempKey)>=2)
                    {
                        cpuInfo.put(tempKey,"-1");
                    }
                    else
                    {
                        long position = fileSize -1;
                        while(true)
                        {
                            lastLineReadFile.seek(position);
                            if(lastLineReadFile.readByte()=='\n')
                            {
                                if(is_second)
                                {
                                    break;
                                }
                                ls_second = true;
                            }
                            position --;

                        }

                        lastLineReadFile.seek(position+2);
                        sLine = lastLineReadFile.readLine();

                        tokenizedString = getTokens2(sLine);

                        cpuInfo.put(tempKey, Integer.parseInt( tokenizedString[id_index].toString()));



                    }
                }
                else if(fileSize > previousFileSize)
                {

                    fileSizeMap.put(tempKey, fileSize);

                    fileSizeChangeCountMap.put(tempKey, 0);

                    
                    long position = fileSize -1;
                    while(true)
                    {
                        lastLineReadFile.seek(position);
                        if(lastLineReadFile.readByte()=='\n')
                        {
                            if(is_second)
                            {
                                break;
                            }
                            ls_second = true;
                        }
                        position --;

                    }

                    lastLineReadFile.seek(position+2);
                    sLine = lastLineReadFile.readLine();

                    tokenizedString = getTokens2(sLine);

                    cpuInfo.put(tempKey, Integer.parseInt( tokenizedString[id_index].toString()));



                }











            }catch(Exception e)
            {
                e.printStackTrace();
            }
            finally
            {
                try{ if(br!=null) br.close(); }catch(Exception e){ e.printStackTrace();}
                try{ lastLineReadFile.close(); }catch(Exception e){ e.printStackTrace();}
            }




        }

        return cpuInfo;
    }

    public static String[] getTokens2(String line)
    {
        int i=0;
        String[] data = null;

        String cpudelimeters = " " + " \t";
        StringTokenizer stk = new StringTokenizer(line, cpudelimeters);

        data = new String[stk.countTokens()];

        while(stk.hasMoreTokens())
        {
            data[i] = stk.nextToken();
            i++;
        }

        return data;
    }
}

    























