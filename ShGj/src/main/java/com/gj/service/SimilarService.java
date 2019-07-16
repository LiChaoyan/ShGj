package com.gj.service;

import java.util.ArrayList;

import com.gj.pojo.BSimilar;
import com.gj.pojo.XSimilar;

public interface SimilarService {
    
	ArrayList<BSimilar> getBSimilarbybid(String time_num,String bid);

	ArrayList<XSimilar> getXSimilarbyxh(String time_num, String xh);

	

}
