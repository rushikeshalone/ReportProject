package com.corstest.reactapitest.controllers;

import com.corstest.reactapitest.entities.OrgElements;
import com.corstest.reactapitest.repos.OrgElementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orgelements")
public class OrgElementController {

    @Autowired
    private OrgElementRepository orgElementRepository;

    @PostMapping("/save")
    public ResponseEntity<OrgElements> saveOrgElement(@RequestBody OrgElements orgElement) {
        OrgElements savedOrgElement = orgElementRepository.save(orgElement);
        return ResponseEntity.ok(savedOrgElement);
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrgElements>> getAllOrgElements() {
        List<OrgElements> orgElements = orgElementRepository.findAll();
        System.out.println("List of orgElements");
        System.out.println(orgElements);
        return ResponseEntity.ok(orgElements);
    }

    @GetMapping("/by-code/{code}")
    public ResponseEntity<List<OrgElements>> getOrgElementsByCode(@PathVariable String code) {
        List<OrgElements> orgElements = orgElementRepository.findByCode(code);
        return ResponseEntity.ok(orgElements);
    }

    @GetMapping("/org")
    public ResponseEntity<List<Object[]>> getOrg(){
        List<Object[]> orgele = orgElementRepository.getOrgElementsWithCombinedName();
        return ResponseEntity.ok(orgele);
    }
}
