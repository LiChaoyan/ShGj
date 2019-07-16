package com.gj.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.gj.pojo.Floor;
import com.gj.pojo.Gj;

@Service
public interface FloorMapper {
    /*查询轨迹*/
	ArrayList<Floor> getfloorCount();
	ArrayList<Floor> getfloorCountBybname(@Param("bname") String bname);
	Integer getBidCount();
	Integer getFidCount();
	ArrayList<Floor> getBnameList();

}
