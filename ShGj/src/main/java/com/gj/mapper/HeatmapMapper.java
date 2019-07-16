package com.gj.mapper;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.gj.pojo.HeatOpint;


@Service
public interface HeatmapMapper {

	public ArrayList<HeatOpint> getHeatlist(@Param("num") Integer num);
	

}
