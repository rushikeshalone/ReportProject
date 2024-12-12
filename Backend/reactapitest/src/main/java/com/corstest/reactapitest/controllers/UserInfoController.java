package com.corstest.reactapitest.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corstest.reactapitest.entities.User;
import com.corstest.reactapitest.repos.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserInfoController {

    @Autowired
    private UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(UserInfoController.class);

    // Get all users
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        logger.debug("Requested to get all users");
        List<User> users = userRepository.findAll();
        logger.info("All users sent: " + users.size());
        System.out.println(users);
        return ResponseEntity.ok(users);
    }

    // Get user by email
    @GetMapping("/user/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        logger.debug("Requested to get user by email: {}", email);
        return userRepository.findByEmail(email)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("User not found with email: " + email));
    }
    
}
