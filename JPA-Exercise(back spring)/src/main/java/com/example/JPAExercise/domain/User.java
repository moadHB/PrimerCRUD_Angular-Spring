package com.example.JPAExercise.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String name;
    private String lastName;
    private String city;
    private Integer age;

    public User(int id){
        this.id=id;
    }

    public String getJson(){
        return "{id:"+this.id+", name:"+this.name+", lastName:"+this.lastName+", city:"+this.city+" , age:"+this.age+"}";
    }
}
