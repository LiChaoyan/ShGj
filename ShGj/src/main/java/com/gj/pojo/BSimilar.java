package com.gj.pojo;

public class BSimilar {
	private String time_num;
	private String bid;
	private String bname;
	private String similar;
	
	
	public BSimilar() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BSimilar(String time_num,String bid, String bname, String similar) {
		super();
		this.time_num=time_num;
		this.bid = bid;
		this.bname = bname;
		this.similar = similar;
	}
	public String getBid() {
		return bid;
	}
	public void setBid(String bid) {
		this.bid = bid;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getSimilar() {
		return similar;
	}
	public void setSimilar(String similar) {
		this.similar = similar;
	}
	
	public String getTime_num() {
		return time_num;
	}
	public void setTime_num(String time_num) {
		this.time_num = time_num;
	}
	
	
	

}
