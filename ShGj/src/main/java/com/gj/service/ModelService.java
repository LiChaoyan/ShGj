package com.gj.service;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.gj.pojo.Model;

public interface ModelService {
   
	/*查找深夜在线率*/
	int getlv_szl();
	/*查找用户不同时间段的人员分布信息：输入用户uid和data时间段标号，返回uid按时间段对应的uid的信息*/
	ArrayList<Model> TulistBydata(@Param ("uid") String data);
}
