package com.corstest.reactapitest.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corstest.reactapitest.entities.User;
import com.corstest.reactapitest.repos.UserRepository;

@RestController
@RequestMapping("/api/signup")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody User user) {

        logger.info("Postmapping hit (createUser)...");

       /* // Check for duplicate email
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use.");
        }

        // Hash the password
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));   */ 

        // Save the user
        try {
            userRepository.save(user);
            logger.info("User created successfully!");
            return ResponseEntity.ok("User created successfully!");
        } catch (Exception e) {
            logger.error("Error: Failed to create user", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Error: Failed to create user");
        }
    }



    
}
