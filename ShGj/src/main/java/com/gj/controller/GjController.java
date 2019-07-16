package com.gj.controller;


import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.alibaba.fastjson.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



import com.gj.pojo.Gj;
import com.gj.service.GjService;





@Controller

public class GjController {
	
	@Autowired
	GjService gjService;
	
	
	@RequestMapping("/getgjbybid_start")
	public void getGjBybid_start(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		
		String bid_start = request.getParameter("bid_start");
		 System.out.println(bid_start);
		 ArrayList<Gj> list=gjService.listBybid_start(bid_start);
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
