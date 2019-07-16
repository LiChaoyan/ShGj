package com.gj.word2vec;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import com.gj.word2vec.domain.WordEntry;

public class Word2vec_zut {
       
       public static List<String> getxhSimilar(String path,String xh_word) throws IOException{
    	   List<String> xh_similar=new ArrayList<String>();
    	   Word2VEC vec = new Word2VEC();
   		   vec.loadJavaModel(path);//f:/test/vec_xh/javaVector_xh_1.model
           
   		   long start = System.currentTimeMillis();
   		
   		   //获取相似的词
 
   		   Set<WordEntry> vecstr=vec.distance(xh_word);
   		   		for(WordEntry a:vecstr) {
   				xh_similar.add(a.toString());
   		   		}
   		 
   		   		System.out.println("耗时:");
   		   		System.out.println(+System.currentTimeMillis() - start);

    	   return xh_similar;
       }
}
