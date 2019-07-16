package com.gj.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSONObject;
import com.gj.pojo.BSimilar;
import com.gj.pojo.Gj;
import com.gj.pojo.XSimilar;
import com.gj.service.SimilarService;



@Controller
public class SimilarController {
	@Autowired
	SimilarService similarService;
	
	@RequestMapping("/getSimilarbyxh")
	public void getSimilarbyxh(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		
		String xh = request.getParameter("xh");
		String time_num=request.getParameter("time_num");
		ArrayList<XSimilar> list=similarService.getXSimilarbyxh(time_num,xh);
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
	@RequestMapping("/getSimilarbybid")
	public void getSimilarbybid(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		
		String bid = request.getParameter("bid");
		String time_num=request.getParameter("time_num");
		 ArrayList<BSimilar> list=similarService.getBSimilarbybid(time_num,bid);
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
