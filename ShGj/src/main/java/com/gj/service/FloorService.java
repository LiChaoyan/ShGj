package com.gj.service;

import java.util.ArrayList;

import com.gj.pojo.BFList;
import com.gj.pojo.Floor;


public interface FloorService {
	/**
     *  查询楼层信息
     */
	ArrayList<BFList> getfloorCount();

}
