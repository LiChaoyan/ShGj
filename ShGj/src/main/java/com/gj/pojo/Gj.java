package com.gj.pojo;

public class Gj {
	 private String bid_start;
	 private String bid_end;
     private String bname_start;
     private String bname_end;
     private String start_end;
     private Integer count;
     
     
	
	public Gj() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Gj(String bid_start, String bid_end, String bname_start, String bname_end, Integer count) {
		super();
		this.bid_start = bid_start;
		this.bid_end = bid_end;
		this.bname_start = bname_start;
		this.bname_end = bname_end;
		this.count = count;
	}

	public Gj(String bid_start, String bid_end, String bname_start, String bname_end, String start_end, Integer count) {
		super();
		this.bid_start = bid_start;
		this.bid_end = bid_end;
		this.bname_start = bname_start;
		this.bname_end = bname_end;
		this.start_end = start_end;
		this.count = count;
	}
	public String getBid_start() {
		return bid_start;
	}
	public void setBid_start(String bid_start) {
		this.bid_start = bid_start;
	}
	public String getBid_end() {
		return bid_end;
	}
	public void setBid_end(String bid_end) {
		this.bid_end = bid_end;
	}
	public String getBname_start() {
		return bname_start;
	}
	public void setBname_start(String bname_start) {
		this.bname_start = bname_start;
	}
	public String getBname_end() {
		return bname_end;
	}
	public void setBname_end(String bname_end) {
		this.bname_end = bname_end;
	}
	
	public String getStart_end() {
		return start_end;
	}
	public void setStart_end(String start_end) {
		this.start_end = start_end;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	@Override
	public String toString() {
		return "Gj [bid_start=" + bid_start + ", bid_end=" + bid_end + ", bname_start=" + bname_start + ", bname_end="
				+ bname_end + ", start_end=" + start_end + ", count=" + count + "]";
	}
	
     
     
 
}
