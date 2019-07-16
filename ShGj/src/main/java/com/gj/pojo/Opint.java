package com.gj.pojo;

public class Opint {
        
	   String lon;
       String lat;
       public Opint() {
		// TODO Auto-generated constructor stub
	}
       public Opint( String lon, String lat){
    	   this.lon=lon;
    	   this.lat=lon;
       }
      
	/**
	 * @return the lon
	 */
	public String getLon() {
		return lon;
	}
	/**
	 * @param lon the lon to set
	 */
	public void setLon(String lon) {
		this.lon = lon;
	}
	/**
	 * @return the lat
	 */
	public String getLat() {
		return lat;
	}
	/**
	 * @param lat the lat to set
	 */
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String toString() {
		return "[" + lon + ", " + lat + "]";
	}
       
}
