package com.gj.service;


import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.gj.pojo.HeatOpint;


public interface HeatmapService {

    /**
     *  查询某时间段内人员分布情况
     * @param time_num 
     */
    ArrayList<HeatOpint> getHeatlist(@Param ("time_num") String time_num);

	ArrayList<HeatOpint> getklist(@Param ("time_num") String time_num);

	
	
   
}
