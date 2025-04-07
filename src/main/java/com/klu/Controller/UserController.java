package com.klu.Controller;


import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.model.User;
import com.klu.repository.UserRepo;
import com.klu.service.UserService;
import com.klu.utils.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
 @Autowired
 private UserService userService;
 
 @Autowired
    private JwtUtil jwtUtil;
 
  @Autowired
  private UserRepo userRepository;
 
 @PostMapping("/register")
 public String registerUser(@RequestBody User user) {
  return userService.registerUser(user);
 }
 
 @PostMapping("/login")
 public ResponseEntity<?> loginUser(@RequestBody User user) {
     String token = userService.loginUser(user.getEmail(), user.getPassword());
     if (token != null) {
         return ResponseEntity.ok(Collections.singletonMap("token", token));
     } else {
         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
     }
 }
 @GetMapping("/userinfo")
    public ResponseEntity<?> getUserInfo(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            String email = jwtUtil.extractUsername(token); // email from token

            return userRepository.findByEmail(email)
              .<ResponseEntity<?>>map(user -> ResponseEntity.ok(user))
                    .orElse(ResponseEntity.status(404).body("User not found"));
        }

        return ResponseEntity.status(401).body("Unauthorized");
    }


}
