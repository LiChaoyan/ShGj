package com.gj.controller;


import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.alibaba.fastjson.JSONObject;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



import com.gj.pojo.HeatOpint;

import com.gj.service.HeatmapService;






@Controller

public class HeatMapController {
	
	@Autowired
	HeatmapService heatmapService;
	
	
	@RequestMapping("/getheatmap")
    public void Heatmap(HttpServletRequest request,HttpServletResponse response){
		String time_num = request.getParameter("time_num");
		
		ArrayList<HeatOpint> list=new ArrayList<HeatOpint>();
        list=heatmapService.getHeatlist(time_num);
        System.out.println(list.size());
        
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
	
	@RequestMapping("/getkmap")
    public void kmap(HttpServletRequest request,HttpServletResponse response){
		String time_num = request.getParameter("time_num");
	    ArrayList<HeatOpint> list=new ArrayList<HeatOpint>();
        list=heatmapService.getklist(time_num);
        System.out.println("离别"+list.size());
        
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
