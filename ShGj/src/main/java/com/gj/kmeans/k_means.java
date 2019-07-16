package com.gj.kmeans;
 
import java.util.ArrayList;  
import java.util.Random;  
   
public class k_means {  
    private int k;// 分成多少簇  
    private int m;// 迭代次数  
    private int dataSetLength;// 数据集元素个数，即数据集的长度  
    private ArrayList<double[]> dataSet;// 数据集链表  
    private ArrayList<double[]> center;// 中心链表  
    private ArrayList<ArrayList<double[]>> cluster; // 簇  
    private ArrayList<Float> jc;// 误差平方和，k越接近dataSetLength，误差越小  
    private Random random;  
   
    public void setDataSet(ArrayList<double[]> dataSet) {  
    	//设置需分组的原始数据集
        this.dataSet = dataSet;  
    }  
 
    public ArrayList<ArrayList<double[]>> getCluster() {  
        return cluster;  
    }  
    public ArrayList<double[]> getCenter() {  
        return center;  
    }  
    public k_means(int k) {  
    	//传入需要分成的簇数量
        if (k <= 0) {  
            k = 1;  
        }  
        this.k = k;  
    }  
  
    private void init() { 
    	//初始化
        m = 0;  
        random = new Random();  
        if (dataSet == null || dataSet.size() == 0) {   
        	System.out.println("数据为空，请输入数据！！！！");
        } else{
        	dataSetLength = dataSet.size();  
        	if (k > dataSetLength) {  
        		k = dataSetLength;  
        	}  
        	center = initCenters();//初始化中心聚点，存入一个列表中
        	cluster = initCluster();//初始化簇集合，存入k个列表中
        	jc = new ArrayList<Float>();  //初始化误差项
        	}
    }  
  
    private ArrayList<double[]> initCenters() {  
    	//初始化中心数据链表，分成多少簇就有多少个中心点
        ArrayList<double[]> center = new ArrayList<double[]>();  
        int[] randoms = new int[k];  
        boolean flag;  
        int temp = random.nextInt(dataSetLength);  
        randoms[0] = temp;  
        for (int i = 1; i < k; i++) {  
            flag = true;  
            while (flag) {  
                temp = random.nextInt(dataSetLength);  
                int j = 0;  
                while (j < i) {  
                    if (temp == randoms[j]) {  
                        break;  
                    }  
                    j++;  
                }  
                if (j == i) {  
                    flag = false;  
                }  
            }  
            randoms[i] = temp;  
        }   
        for (int i = 0; i < k; i++) {  
            center.add(dataSet.get(randoms[i]));// 生成初始化中心链表  
        }  
        return center;  
    }  
  
 
    private ArrayList<ArrayList<double[]>> initCluster() {  
    	//初始化簇集合
        ArrayList<ArrayList<double[]>> cluster = new ArrayList<ArrayList<double[]>>();  
        for (int i = 0; i < k; i++) {  
            cluster.add(new ArrayList<double[]>());  
        }  
  
        return cluster;  
    }  
  
 
    private double distance(double[] element, double[] center) {  
    	//计算两个点之间的距离
        double distance = 0.0f;  
        double x = element[0] - center[0];  
        double y = element[1] - center[1];  
        double z = x * x + y * y;  
        distance = (double) Math.sqrt(z);  
  
        return distance;  
    }  
  
  
    private int minDistance(double[] distance) {  
    	 //获取距离集合中最小距离的位置
        double minDistance = distance[0];  
        int minLocation = 0;  
        for (int i = 1; i < distance.length; i++) {  
            if (distance[i] < minDistance) {  
                minDistance = distance[i];  
                minLocation = i;  
            } else if (distance[i] == minDistance) // 如果相等，随机返回一个位置  
            {  
                if (random.nextInt(10) < 5) {  
                    minLocation = i;  
                }  
            }  
        }  
  
        return minLocation;  
    }  
  
 
    private void clusterSet() {  
    	//将当前元素放到最小距离中心相关的簇中
        double[] distance = new double[k];  
        for (int i = 0; i < dataSetLength; i++) {  
            for (int j = 0; j < k; j++) {  
                distance[j] = distance(dataSet.get(i), center.get(j));  
            }  
            int minLocation = minDistance(distance);  
            cluster.get(minLocation).add(dataSet.get(i));  
  
        }  
    }  
  
 
    private double errorSquare(double[] element, double[] center) {
    	//求两点误差平方的方法 
        double x = element[0] - center[0];  
        double y = element[1] - center[1];  
  
        double errSquare = x * x + y * y;  
  
        return errSquare;  
    }  
  
  
    private void countRule() {  
    	//计算误差平方和准则函数方法
        double jcF = 0;  
        for (int i = 0; i < cluster.size(); i++) {  
            for (int j = 0; j < cluster.get(i).size(); j++) {  
                jcF += errorSquare(cluster.get(i).get(j), center.get(i));  
  
            }  
        }  
        jc.add((float)jcF);  
    }  
    private void setNewCenter() { 
    	//设置新的簇中心方法
        for (int i = 0; i < k; i++) {  
            int n = cluster.get(i).size();  
            if (n != 0) {  
                double[] newCenter = { 0, 0 };  
                for (int j = 0; j < n; j++) {  
                    newCenter[0] += cluster.get(i).get(j)[0];  
                    newCenter[1] += cluster.get(i).get(j)[1];  
                }  
                // 设置一个平均值  
                newCenter[0] = newCenter[0] / n;  
                newCenter[1] = newCenter[1] / n;  
                center.set(i, newCenter);  
            }  
        }  
    }  
    
    public void printDataArray(ArrayList<double[]> dataArray,  
            String dataArrayName) { 
    	//打印数据
        for (int i = 0; i < dataArray.size(); i++) {  
            System.out.print("print:(" + dataArray.get(i)[0] + "," + dataArray.get(i)[1]+")");  
        }  
        System.out.println("===================================");  
    }  
   
    void kmeans() {  
        init();  
        // 循环分组，直到误差不变为止  
        while (true) {  
            clusterSet(); //将当前元素放到最小距离中心相关的簇中 
            countRule();  //计算误差平方和准则函数方法 (当误差不变时，聚类中心确定)
            // 误差不变了，分组完成  
            if (m != 0) {  
                if (jc.get(m) - jc.get(m - 1) == 0) {  
                    break;  
                }  
            }  
  
            setNewCenter();   
            m++;  //迭代次数
            cluster.clear(); //簇清空
            cluster = initCluster(); //再次重新分配簇 
        }  
    }  
}  