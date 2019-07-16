package com.gj.pojo;

public class Floor {
	private String bname;
	private String fid="0";
	private Integer count=0;
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getFid() {
		return fid;
	}
	public void setFid(String fid) {
		this.fid = fid;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Floor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Floor(String bname,String fid) {
		super();
		this.bname=bname;
		this.fid=fid;
	}
	public Floor(String bname, String fid, Integer count) {
		super();
		this.bname = bname;
		this.fid = fid;
		this.count = count;
	}
	

}
