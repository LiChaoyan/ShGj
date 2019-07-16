package com.gj.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gj.mapper.HeatmapMapper;
import com.gj.pojo.HeatOpint;

import com.gj.service.HeatmapService;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class HeatmapServiceimpl implements HeatmapService {

    @Autowired
    HeatmapMapper heatmapMapper;

    /**
     *  查询某一天内人员分布情况
     * @return
     */

    DecimalFormat    df   = new DecimalFormat("######0.00"); 
    
	@Override
	public ArrayList<HeatOpint> getHeatlist(String time_num) {
		//根据时间段，匹配相对应的训练好的模型
		Integer num=Integer.parseInt(time_num);
		ArrayList<HeatOpint> heatlist=heatmapMapper.getHeatlist(num);
		return heatlist;
	}

	@Override
	public ArrayList<HeatOpint> getklist(String time_num) {
		int k_num=0;
		switch (time_num) {
		case "1":
			k_num=6;
			break;
		case "2":
			k_num=11;
			break;	
		default:
			k_num=10;
			break;
		}
		System.out.println(time_num);
		ArrayList<HeatOpint> klist=new ArrayList<HeatOpint>();
		String fileName= this.getClass().getClassLoader().getResource("./location/location_"+time_num+".txt").getPath();
		klist=com.gj.kmeans.main.getKheat(fileName, k_num);
		return klist;
	}

   
}
