package com.gj.kmeans;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class ReadData {
	//从文件中读取数据
	public ArrayList<double[]> read(String fileName){
		ArrayList<double[]> arr=new ArrayList<double[]>();
		try {
			BufferedReader reader = new BufferedReader(new FileReader(fileName));
			String line = null;
	        while((line=reader.readLine())!=null){
	        	String str[] = line.split("\\s+");
	        	double[][] point1 = new double[1][2];
	        	
	        	point1[0][0]=Double.parseDouble(str[0].trim());
	        	point1[0][1]=Double.parseDouble(str[1].trim());
	        
	        	arr.add(point1[0]);
	        }
		}catch (FileNotFoundException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		}
	    	
		return arr;

	}
}
