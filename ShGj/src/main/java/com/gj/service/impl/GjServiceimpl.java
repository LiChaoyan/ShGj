package com.gj.service.impl;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gj.mapper.GjMapper;
import com.gj.pojo.Gj;
import com.gj.service.GjService;
import com.gj.service.HeatmapService;

@Service
public class GjServiceimpl implements GjService{
	@Autowired
    GjMapper gjMapper;
	 /**
     *  查询轨迹
     * @return
     */

    DecimalFormat    df   = new DecimalFormat("######0.00"); 
    public ArrayList<Gj> listBybid_start(String bid_start) {
    	String[] str=new String[2];
    	ArrayList<Gj> list=gjMapper.getListBybid_start(bid_start);
    	/*
    	String data_start_end="[";
    	String data_opint="[";
    	for(int i=0;i<list.size();i++) {
    		Gj gj=new Gj();
    		gj=list.get(i);
    		String bname_start=gj.getBname_start();
    		String bname_end=gj.getBname_end();
    		Integer count=gj.getCount();
    		data_start_end=data_start_end+"[{name:'"+bname_start+"'}, {name:'"+bname_end+"',value:"+count+"}],";
    		data_opint=data_opint+"{name:'"+bname_end+"',value:"+count+"},";
    	}
    	data_start_end=data_start_end+"]";
    	data_opint=data_opint+"]";
    	str[0]=data_start_end;
    	str[1]=data_opint;
    	System.out.println(str[0]+str[1]);*/
		return list;
	}
    	

}
