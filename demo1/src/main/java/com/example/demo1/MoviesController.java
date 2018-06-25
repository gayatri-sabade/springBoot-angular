package com.example.demo1;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MoviesController {
     public static List<Movies> mvList;
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/movies", method = RequestMethod.GET)
    public List<Movies> getMovieList(){
        mvList = new ArrayList<Movies>();
        Movies m1 = new Movies("Kaabil", "2017", 5);
        Movies m2 = new Movies("Newton", "2017", 3);
        Movies m3 = new Movies("Raees", "2017", 3);
        Movies m4 = new Movies("Rangoon", "2017", 2);
        Movies m5 = new Movies("Tubelight", "2017", 1);
        Movies m6 = new Movies("MOM", "2017", 1);
        Movies m7 = new Movies("Raazi", "2018", 3);
        Movies m8 = new Movies("Baaghi 2", "2018", 4);
        Movies m9 = new Movies("Raid", "2018", 2);
        Movies m10 = new Movies("Parmanu", "2018", 1);
        Movies m11 = new Movies("Padmaavat", "2018", 5);
        mvList.add(m1);
        mvList.add(m2);
        mvList.add(m3);
        mvList.add(m4);
        mvList.add(m5);
        mvList.add(m6);
        mvList.add(m7);
        mvList.add(m8);
        mvList.add(m9);
        mvList.add(m10);
        mvList.add(m11);

        return mvList;
    }
}
