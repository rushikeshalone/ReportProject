package com.corstest.reactapitest.entities;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "g_AML")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GAML {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AMLId", nullable = false)
    private Integer amlId;

    @Column(name = "Code", length = 64)
    private String code;

    @Column(name = "AlertIndicatorCode", length = 64)
    private String alertIndicatorCode;

    @Column(name = "AlertIndicatorName", length = 1024)
    private String alertIndicatorName;

    @Column(name = "ReportName", columnDefinition = "VARCHAR(MAX)")
    private String reportName;

    @Column(name = "ReportPath", columnDefinition = "VARCHAR(MAX)")
    private String reportPath;
}
