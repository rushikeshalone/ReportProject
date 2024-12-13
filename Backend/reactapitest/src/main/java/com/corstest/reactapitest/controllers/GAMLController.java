package com.corstest.reactapitest.controllers;

import com.corstest.reactapitest.entities.GAML;
import com.corstest.reactapitest.repos.GAMLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gaml")
public class GAMLController {

    @Autowired
    private GAMLRepository gamlRepository;

    // Get all GAML records
    @GetMapping("/all")
    public ResponseEntity<List<GAML>> getAllGAML() {
        List<GAML> gamlList = gamlRepository.findAll();
        return new ResponseEntity<>(gamlList, HttpStatus.OK);
    }

    // Get a single GAML record by ID
    @GetMapping("/{id}")
    public ResponseEntity<List<GAML>> getGAMLById(@PathVariable Integer id) {
        List<GAML> gamlList = gamlRepository.findByById(id);
        if (gamlList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(gamlList, HttpStatus.OK);
    }

    // Create a new GAML record
    @PostMapping
    public ResponseEntity<GAML> createGAML(@RequestBody GAML gaml) {
        GAML savedGAML = gamlRepository.save(gaml);
        return new ResponseEntity<>(savedGAML, HttpStatus.CREATED);
    }

    // Update an existing GAML record
    @PutMapping("/{id}")
    public ResponseEntity<GAML> updateGAML(@PathVariable Integer id, @RequestBody GAML gamlDetails) {
        return gamlRepository.findById(id)
                .map(gaml -> {
                    gaml.setCode(gamlDetails.getCode());
                    gaml.setAlertIndicatorCode(gamlDetails.getAlertIndicatorCode());
                    gaml.setAlertIndicatorName(gamlDetails.getAlertIndicatorName());
                    gaml.setReportName(gamlDetails.getReportName());
                    gaml.setReportPath(gamlDetails.getReportPath());
                    GAML updatedGAML = gamlRepository.save(gaml);
                    return new ResponseEntity<>(updatedGAML, HttpStatus.OK);
                })
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Delete a GAML record
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGAML(@PathVariable Integer id) {
        return gamlRepository.findById(id)
                .map(gaml -> {
                    gamlRepository.delete(gaml);
                    return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
                })
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
