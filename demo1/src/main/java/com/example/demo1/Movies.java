package com.example.demo1;

public class Movies {
    private String mvName;
    private String year;
    private int rate;

    public Movies(String mvName,String year,int rate){
        this.setMvName(mvName);
        this.setYear(year);
        this.setRate(rate);
    }

    public String getMvName() {
        return mvName;
    }

    public void setMvName(String mvName) {
        this.mvName = mvName;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    @Override
    public String toString() {
        return "Movies{" +
                "mvName=" + mvName +
                ", year='" + year +
                ", rate='" +rate+ '\'' +
                '}';
    }
}
