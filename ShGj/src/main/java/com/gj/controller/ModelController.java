package com.gj.controller;


import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.gj.service.HeatmapService;
import com.gj.service.ModelService;
import com.alibaba.fastjson.JSONObject;
import com.gj.pojo.*;





@Controller
public class ModelController {
	@Autowired
	ModelService modelService;
	@Autowired
	HeatmapService heatmapService;
	
	@RequestMapping("/views/yibiao")
    public ModelAndView Gitlvt(HttpServletRequest request,HttpServletResponse response){
		ModelAndView modelAndView =new ModelAndView();
		int lv=modelService.getlv_szl();	
	    modelAndView.addObject("szl", lv); 
	    modelAndView.setViewName("yibiao");
	    return modelAndView;
	  }
	/*
	@RequestMapping("/getbiao")
	public void GitBiaozhu(HttpServletRequest request,HttpServletResponse response){
		
        String time_num = request.getParameter("time_num");
		
		ArrayList<HeatOpint> list=new ArrayList<HeatOpint>();
        list=heatmapService.getHeatlist(time_num);
        //System.out.println(list.size());
        
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
        
	}*/
	
}
