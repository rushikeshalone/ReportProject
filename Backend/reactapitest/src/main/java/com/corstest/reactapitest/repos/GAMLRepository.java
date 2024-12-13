package com.corstest.reactapitest.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corstest.reactapitest.entities.GAML;

public interface GAMLRepository extends JpaRepository<GAML, Integer> {
    List<GAML> findAll();

    List<GAML> findByById(Integer byId);
}
