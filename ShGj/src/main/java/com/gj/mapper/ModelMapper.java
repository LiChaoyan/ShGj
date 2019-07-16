package com.gj.mapper;
 

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.gj.pojo.Model;


@Service
public interface ModelMapper {
	
	/*查找深夜在线率*/
	public double getlv_szl();
	/*查找用户不同时间段的人员分布信息：输入用户uid和data时间段标号，返回uid按时间段对应的uid的信息*/
	public ArrayList<Model> TulistBydata(@Param ("data")String data);
}