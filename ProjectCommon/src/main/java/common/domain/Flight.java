package common.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.gson.annotations.JsonAdapter;

import java.time.LocalDateTime;

public class Flight implements Entity<Long>{

    private Long id;

    private String from;

    private String to;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime date;

    private int nrOfSeats;

    public Flight() {}

    public Flight(String from, String to, LocalDateTime date, int nrOfSeats) {
        this.from = from;
        this.to = to;
        this.date = date;
        this.nrOfSeats = nrOfSeats;
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    public String getFrom(){ return from; }

    public void setFrom(String from){ this.from = from; }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public int getNrOfSeats() {
        return nrOfSeats;
    }

    public void setNrOfSeats(int nrOfSeats) {
        this.nrOfSeats = nrOfSeats;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "id=" + id +
                ", from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", date=" + date +
                ", nrOfSeats=" + nrOfSeats +
                '}';
    }
}


