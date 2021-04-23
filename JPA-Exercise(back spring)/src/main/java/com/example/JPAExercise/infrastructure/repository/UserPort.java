package com.example.JPAExercise.infrastructure.repository;

import com.example.JPAExercise.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPort extends JpaRepository<User,Integer> {
}
