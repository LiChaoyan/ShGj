package com.gj.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.gj.pojo.Gj;

@Service
public interface GjMapper {
    /*查询轨迹*/
	ArrayList<Gj> getListBybid_start(@Param("bid_start") String bid_start);

}
