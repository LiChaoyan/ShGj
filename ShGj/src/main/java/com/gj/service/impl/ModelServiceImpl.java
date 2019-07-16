package com.gj.service.impl;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.gj.mapper.ModelMapper;

import com.gj.pojo.Floornum;
import com.gj.pojo.Model;
import com.gj.service.ModelService;

@Service
public class ModelServiceImpl  implements ModelService{
	
	@Autowired
	ModelMapper modelMapper;
	DecimalFormat    df   = new DecimalFormat("######0.00");  
	
	

	@Override
	public int getlv_szl() {
		double count=modelMapper.getlv_szl();
		String s=df.format(count);
		Double d_lv= Double.parseDouble(s);
		int lv=(int) (d_lv*100);
		return lv;
	}
	@Override
	public ArrayList<Model> TulistBydata(String data){
		return modelMapper.TulistBydata(data);
	}

}
