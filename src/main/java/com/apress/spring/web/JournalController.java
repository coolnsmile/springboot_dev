package com.apress.spring.web;

import java.util.*;
import java.io.*;

import java.nio.charset.Charset;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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







@Component
@PropertySource("classpath:global.properties")
@Controller
public class JournalController {
    private static final Logger log = LoggerFactory.getLogger(JournalController.class);
    private static final String VIEW_INDEX = "index";
    private static final Charset UTF8_CHARSET = Charset.forName("UTF-8");



@ResponseBody
@RequestMapping(value="/longlong", method= RequestMethod.GET)
public void  http502() {



        try{
            Thread.sleep(2400);

        }catch(Exception e)
        {
     		System.out.println(e);
        }

       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");
       System.out.println("Hello World");



    }



}
