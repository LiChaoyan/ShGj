package com.gj.service.impl;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gj.mapper.GjMapper;
import com.gj.mapper.SimilarMapper;
import com.gj.pojo.BSimilar;
import com.gj.pojo.XSimilar;
import com.gj.service.SimilarService;
import com.gj.word2vec.Word2vec_zut;
@Service
public class SimilarServiceimpl implements SimilarService{
	
	@Autowired
    SimilarMapper similarMapper;
	
	DecimalFormat    df   = new DecimalFormat("######0.00");
    
	/*获取建筑相似度*/
	@Override
	public ArrayList<BSimilar> getBSimilarbybid(String time_num,String bid) {
		// 
		return null;
	}
    /*获取学号相似度*/
	@Override
	public ArrayList<XSimilar> getXSimilarbyxh(String time_num,String xh) {
		ArrayList<XSimilar> xSimilarlist=new ArrayList<XSimilar> ();
		
		//根据时间段，匹配相对应的训练好的模型
		Integer num=Integer.parseInt(time_num);
		String time=null;
		switch (num) {
		case 1:
			time="0:00-6:00";
			break;
		case 2:
			time="6:00-12:00";
			break;
		case 3:
			time="12:00-18:00";
			break;

		default:
			time="18:00-24:00";
			break;
		}
		//添加第一条数据
				XSimilar xSimilar=similarMapper.getXHbyxh(xh);
		    	xSimilar.setSimilar("1");
		    	xSimilar.setTime_num(time);
		    	xSimilarlist.add(xSimilar);
		 String modelpath= this.getClass().getClassLoader().getResource("./model/vec_xh/javaVector_xh_"+num+".model").getPath();
		 List<String> xh_similar=new ArrayList<String>();
		try {
			xh_similar=Word2vec_zut.getxhSimilar(modelpath,xh);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//关联学号，班级，性别，相似度（String）保留2位小数 
        for(int i=0;i<xh_similar.size();i++)
        {
        	String[] xh_similarnum=xh_similar.get(i).toString().split("	");
			String key=xh_similarnum[0];
			String similarnum=xh_similarnum[1].substring(0, 4);;
			
        	xSimilar=similarMapper.getXHbyxh(key);
        	xSimilar.setSimilar(similarnum);
        	xSimilar.setTime_num(time);
        	xSimilarlist.add(xSimilar);
        }
        
		return xSimilarlist;
	} 
}
