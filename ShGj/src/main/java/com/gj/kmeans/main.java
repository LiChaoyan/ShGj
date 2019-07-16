package com.gj.kmeans;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.gj.pojo.HeatOpint;

public class main {
	public static ArrayList<HeatOpint> getKheat(String fileName,Integer num){
		ArrayList<HeatOpint> list=new ArrayList<HeatOpint>();
		    k_means k=new k_means(num);  
	        ArrayList<double[]> dataSet=new ArrayList<double[]>();  
	        ReadData rd=new ReadData();
	        dataSet=rd.read(fileName);
	        //设置原始数据集  
	        k.setDataSet(dataSet);  
	        //执行算法  
	        k.kmeans();
	        //得到聚类结果  
	        ArrayList<ArrayList<double[]>> cluster=k.getCluster();  
	        ArrayList<double[]> center=k.getCenter();
	        for(int i=0;i<center.size();i++)  
	        {  
	        	String lon=String.valueOf(center.get(i)[0]);
	        	String lat=String.valueOf(center.get(i)[1]);
	        	Integer count=cluster.get(i).size();
	        	HeatOpint opint=new HeatOpint(lon,lat,count);
	        	list.add(opint);
	           System.out.println("中心"+i+": ["+center.get(i)[0] + "," + center.get(i)[1]+"] 数量为:"+cluster.get(i).size());
	        	
	        }

		return list;
	}
	public static void main(String[] args) {
		 //初始化一个Kmean对象，将k置为3
		int num;
		System.out.println("输入要分为的类数：");			
		num=(new Scanner(System.in)).nextInt();
        k_means k=new k_means(num);  
        ArrayList<double[]> dataSet=new ArrayList<double[]>();  
        ReadData rd=new ReadData();
        String fileName="f:/test/热点区域k-means.txt";//热点区域k-means
		dataSet=rd.read(fileName);
        //设置原始数据集  
        k.setDataSet(dataSet);  
        //执行算法  
        k.kmeans();
        //得到聚类结果  
        ArrayList<ArrayList<double[]>> cluster=k.getCluster();  
        //查看结果  
        for(int i=0;i<cluster.size();i++)  
        {  
            // k.printDataArray(cluster.get(i), "cluster["+i+"]");  
        	//System.out.println(cluster.get(i));
        }    
        ArrayList<double[]> center=k.getCenter();
        for(int i=0;i<center.size();i++)  
        {  
        	System.out.println("中心"+i+": ["+center.get(i)[0] + "," + center.get(i)[1]+"] 数量为:"+cluster.get(i).size());
        	
        }

	}

}
