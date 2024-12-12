package com.corstest.reactapitest.entities;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "g_orgelement")
public class OrgElements {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrgElementId")
    private Integer orgElementId;

    @Column(name = "ParentOrgElementId")
    private Integer parentOrgElementId;

    @Column(name = "OrgElementTypeId")
    private Integer orgElementTypeId;

    @Column(name = "Category", length = 1)
    private String category;

    @Column(name = "Code", length = 10)
    private String code;

    @Column(name = "Name", length = 255)
    private String name;

    @Column(name = "Status")
    private Byte status;

    @Column(name = "StatusDate")
    private LocalDateTime statusDate;

    @Column(name = "WeekHoliday", length = 50)
    private String weekHoliday;

    @Column(name = "CreatedBy")
    private Integer createdBy;

    @Column(name = "CreatedOn")
    private LocalDateTime createdOn;

    @Column(name = "LastModifiedBy")
    private Integer lastModifiedBy;

    @Column(name = "LastModifiedOn")
    private LocalDateTime lastModifiedOn;

    @Column(name = "addressid")
    private Integer addressId;

    @Column(name = "MappedAccountHeadId")
    private Integer mappedAccountHeadId;

    @Column(name = "openingdate")
    private LocalDateTime openingDate;

    @Column(name = "IFSCCode", length = 20)
    private String ifscCode;

    @Column(name = "MicrCode", length = 20)
    private String micrCode;

    @Column(name = "BranchType", length = 50)
    private String branchType;

    @Column(name = "IsComputerized")
    private Boolean isComputerized;

    @Column(name = "IsExtCounter")
    private Boolean isExtCounter;

    @Column(name = "PAN", length = 20)
    private String pan;

    @Column(name = "TAN", length = 20)
    private String tan;

    @Column(name = "GSTN", length = 20)
    private String gstn;

    @Column(name = "LbrCode", length = 20)
    private String lbrCode;

    @Column(name = "AssetBranchCode", length = 20)
    private String assetBranchCode;

    @Column(name = "ZonalBranchId")
    private Integer zonalBranchId;

    @Column(name = "_block_code", length = 20)
    private String blockCode;

    @Column(name = "GSTNStateCode", length = 20)
    private String gstnStateCode;
}
