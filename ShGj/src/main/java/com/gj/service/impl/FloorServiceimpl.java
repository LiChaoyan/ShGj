package com.gj.service.impl;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gj.mapper.FloorMapper;
import com.gj.mapper.GjMapper;
import com.gj.pojo.BFList;
import com.gj.pojo.Floor;
import com.gj.pojo.Gj;
import com.gj.service.FloorService;
import com.gj.service.GjService;
import com.gj.service.HeatmapService;

@Service
public class FloorServiceimpl implements FloorService{
	@Autowired
    FloorMapper floorMapper;
	 /**
     *  查询轨迹
     * @return
     */

    DecimalFormat    df   = new DecimalFormat("######0.00"); 
    
	@Override
	public ArrayList<BFList> getfloorCount() {
		ArrayList<Floor> list=new ArrayList<Floor>();
		ArrayList<BFList> bflist=new ArrayList<BFList>();//1_bname
		
		Integer bnum=floorMapper.getBidCount();
		Integer fnum=floorMapper.getFidCount();
		ArrayList<Floor> bnamelist=floorMapper.getBnameList();
		String bname=null;
		for(int i=0;i<bnum;i++) {
			BFList bf=new BFList();//一级列表里的对象
			bname=bnamelist.get(i).getBname();
			list=floorMapper.getfloorCountBybname(bname);
			int listlength=list.size();
			List<Floor> b_list = new ArrayList<Floor> ();//二级列表
			for(int j=0;j<fnum;j++) {
				Floor floor=new Floor();//二级列表里的对象
				if(j<listlength) {
					floor=list.get(j);
					b_list.add(list.get(j));
				}else {
					floor=new Floor(bname,""+j+"",0);
					b_list.add(floor);
					
				}
				System.out.println(floor.getCount());
			}
			bf.setBname(bname);
			bf.setB_list(b_list);
			bflist.add(bf);
		}
		
		return bflist;
	}

    	

}
