package com.corstest.reactapitest.entities;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Org_elements")
public class OrgElements {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrgElementId")
    private Integer orgElementId;

    @Column(name = "Code", length = 10)
    private String code;

    @Column(name = "Name", length = 255)
    private String name;

}
