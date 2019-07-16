package com.gj.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.gj.pojo.Gj;
import com.gj.pojo.XSimilar;

@Service
public interface SimilarMapper {
    /*查询学生信息*/
	XSimilar getXHbyxh(@Param("xh") String xh);

}
