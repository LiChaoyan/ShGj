package com.gj.pojo;

public class HeatOpint {

	private String lon;
	private String lat;
	private Integer count;
	
	public HeatOpint() {
		super();
		// TODO Auto-generated constructor stub
	}
	public HeatOpint(String lon, String lat, Integer count) {
		super();
		this.lon = lon;
		this.lat = lat;
		this.count = count;
	}
	public String getLon() {
		return lon;
	}
	public void setLon(String lon) {
		this.lon = lon;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	
}
