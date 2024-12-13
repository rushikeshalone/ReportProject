package com.corstest.reactapitest.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import com.corstest.reactapitest.entities.OrgElements;


public interface OrgElementRepository extends JpaRepository<OrgElements, Integer> {

    // Method to find all records
    List<OrgElements> findAll();

    // Method to find records by Code
    List<OrgElements> findByCode(String code);

   // Custom query to get OrgElementId and combined name
    @Query("SELECT o.id AS OrgElementId, CONCAT(o.code, ' - ', o.name) AS name FROM OrgElements o")
    List<Object[]> getOrgElementsWithCombinedName();

}
