package com.klu.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.model.User;
import com.klu.repository.UserRepo;
import com.klu.utils.JwtUtil;

@Service
public class UserService {
 
 @Autowired
 private UserRepo UserRepo;
 @Autowired
 private JwtUtil jwtUtil;
 
 public String registerUser(User user) {
  if(UserRepo.existsByEmail(user.getEmail())) {
   return "Email already exists";
  }else
  {
   UserRepo.save(user);
   return "User Registered successfully";
  }
 }
 public String loginUser(String email, String password) {
     Optional<User> userOptional = UserRepo.findByEmail(email);
     if (userOptional.isPresent() && userOptional.get().getPassword().equals(password)) {
         return jwtUtil.generateToken(email);
     }
     return null;
 }

}