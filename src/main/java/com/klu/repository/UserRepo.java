package com.klu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import com.klu.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
 boolean existsByEmail(String Email);

 Optional<User> findByEmail(String email);
}