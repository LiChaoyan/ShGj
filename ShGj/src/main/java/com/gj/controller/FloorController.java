package com.gj.controller;


import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.alibaba.fastjson.JSONObject;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


import com.gj.pojo.BFList;


import com.gj.service.FloorService;







@Controller

public class FloorController {
	
	@Autowired
	FloorService floorService;
	
	
	@RequestMapping("/getfloorcount")
	public void getfloorCount(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
     	ArrayList<BFList> list=floorService.getfloorCount();
		
    try {
    	response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=utf-8");
        String json =JSONObject.toJSONString(list);
		response.getWriter().write(json.toString());
		response.getWriter().flush();
	    response.getWriter().close();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
    
		
	}
	
	
	
	
}
