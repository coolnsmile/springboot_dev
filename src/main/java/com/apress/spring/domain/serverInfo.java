package com.apress.spring.domain;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class serverInfo{
    private String serverGroup;
    private String serverName;
    private String serverIp;
    private String serverUser;
    private String serverPassword;
    private String serverPort;
    private Date time;

    public serverInfo(String serverGroup, String serverName, String serverIp, String serverPort, Date time)
    throws ParseException{
        this.serverGroup = serverGroup;
        this.serverName = serverName;
        this.serverIp  = serverIp;
        this.serverUser = serverUser;
        this.serverPassword = serverPassword;
        this.serverPort = serverPort;
        this.time = time;
    }

    serverInfo(){

    }

    public String getServerGroup(){
        return this.serverGroup;
    }

    public String getServerName(){
        return this.serverName;
    }

    public String getServerIp(){
        return this.serverIp;
    }
    public String getServerUser(){
        return this.serverUser;
    }
    public String getServerPassword(){
        return this.serverPassword;
    }    
    public String getServerPort(){
        return this.serverPort;
    }   
    public Date getTime(){
        return this.time;
    }   
    

    public void setServerGroup(String serverGroup){
        this.serverGroup = serverGroup;
    }

    public void setServerName(String serverName){
        this.serverName = serverName;
    }

    public void setServerIp(String serverIp){
        this.serverIp = serverIp;
    }

    public void setServerUser(String serverUser){
        this.serverUser = serverUser;
    }
    public void setServerPassword(String serverPassword){
        this.serverPassword = serverPassword;
    }
    public void setServerPort(String serverPort){
        this.serverPort = serverPort;
    }

    public void setTime(Date time){
        this.time = time;
    }
    



}