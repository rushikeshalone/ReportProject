package com.corstest.reactapitest.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

import com.corstest.reactapitest.entities.User;

public interface UserRepository extends JpaRepository <User , Integer> {
    Optional<User> findByEmail(String email);

}
