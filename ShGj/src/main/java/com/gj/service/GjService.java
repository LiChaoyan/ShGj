package com.gj.service;

import java.util.ArrayList;
import java.util.List;

import com.gj.pojo.Gj;

public interface GjService {
	/**
     *  查询轨迹
     */
	ArrayList<Gj> listBybid_start(String bid_start);

}
