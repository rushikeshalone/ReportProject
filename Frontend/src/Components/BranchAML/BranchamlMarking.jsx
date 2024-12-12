import  { useState, useEffect } from "react";


const BranchamlMarking = () => {
  const [dropdownOptions, setDropdownOptions] = useState([
    {
        "orgelementid": "99",
        "name": "000 - HEAD OFFICE"
    },
    {
        "orgelementid": "1",
        "name": "001 - MAIN BRANCH"
    },
    {
        "orgelementid": "2",
        "name": "002 - BAMBAVADE"
    },
    {
        "orgelementid": "3",
        "name": "003 - KIRLOSKARWADI"
    },
    {
        "orgelementid": "4",
        "name": "004 - TASGAON"
    },
    {
        "orgelementid": "5",
        "name": "005 - BHILAWADI"
    },
    {
        "orgelementid": "6",
        "name": "006 - ISLAMPUR"
    },
    {
        "orgelementid": "7",
        "name": "007 - MAHAVEERNAGAR SANGLI"
    },
    {
        "orgelementid": "8",
        "name": "008 - LAXMIPURI KOLHAPUR"
    },
    {
        "orgelementid": "9",
        "name": "009 - KOKRUD"
    },
    {
        "orgelementid": "10",
        "name": "010 - UCHGAON"
    },
    {
        "orgelementid": "11",
        "name": "011 - KUNDAL"
    },
    {
        "orgelementid": "12",
        "name": "012 - ARAG"
    },
    {
        "orgelementid": "13",
        "name": "013 - MALKAPUR"
    },
    {
        "orgelementid": "14",
        "name": "014 - VISHRAMBAG SANGLI"
    },
    {
        "orgelementid": "15",
        "name": "015 - PALUS CITY"
    },
    {
        "orgelementid": "16",
        "name": "016 - LAXMI MARKET MIRAJ"
    },
    {
        "orgelementid": "17",
        "name": "017 - KUPWAD"
    },
    {
        "orgelementid": "18",
        "name": "018 - AKLUJ"
    },
    {
        "orgelementid": "19",
        "name": "019 - KADEGAON"
    },
    {
        "orgelementid": "20",
        "name": "020 - VITA BRANCH"
    },
    {
        "orgelementid": "21",
        "name": "021 - MADHAVNAGAR SANGLI"
    },
    {
        "orgelementid": "22",
        "name": "022 - ATPADI"
    },
    {
        "orgelementid": "23",
        "name": "023 - JATH"
    },
    {
        "orgelementid": "24",
        "name": "024 - KAVATHE MAHANKAL"
    },
    {
        "orgelementid": "9998",
        "name": "9998 - HO"
    }
]); // State to store dropdown data
  const [selectedOption, setSelectedOption] = useState(""); // State for the selected dropdown option

  // Effect hook to fetch data on component mount
  useEffect(() => {
    // Replace this URL with the actual API URL
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data"); // API endpoint
        const data = await response.json();
        setDropdownOptions(data); // Set the data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array to run only on component mount

  const boxStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "20px",
    marginTop: "20px",
    boxShadow: "0 1px 2px 1px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
  };

  const [firstGridData, setfirstGridData] = useState([
    {
        "id": "1",
        "amlid": "15",
        "alertindicator": "TM1.1 - High value cash deposits in a day",
        "reportname": "Cash deposits greater than INR [200000.00] for individuals and greater than INR [500000.00] for non individuals for the day 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "3",
        "pouserid": "2",
        "noofrecords": "2",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "1"
    },
    {
        "id": "2",
        "amlid": "16",
        "alertindicator": "TM1.1 - High value cash deposits in a day",
        "reportname": "Top [5] cash deposits for the day 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "2",
        "pouserid": "0",
        "noofrecords": "5",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "1"
    },
    {
        "id": "3",
        "amlid": "17",
        "alertindicator": "TM1.2 - High value cash withdrawals in a day",
        "reportname": "Cash withdrawals greater than INR [200000.00] for individuals and greater than INR [500000.00] for non individuals for the day 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "4",
        "amlid": "18",
        "alertindicator": "TM1.2 - High value cash withdrawals in a day",
        "reportname": "Top [5] cash withdrawals for the day 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "8",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "5",
        "amlid": "19",
        "alertindicator": "TM1.3 - High value non-cash deposits in a day",
        "reportname": "Non-Cash deposits greater than INR [500000.00] for individuals and greater than INR [1000000.00] for non individuals for the day 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "6",
        "amlid": "20",
        "alertindicator": "TM1.3 - High value non-cash deposits in a day",
        "reportname": "Top [0] non-cash deposits for the day 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "214",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "7",
        "amlid": "21",
        "alertindicator": "TM1.4 - High value non-cash withdrawals in a day",
        "reportname": "Non-Cash withdrawals greater than INR [500000.00] for individuals and greater than INR [1000000.00] for non individuals for the day 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "1",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "8",
        "amlid": "22",
        "alertindicator": "TM1.3 - High value non-cash deposits in a day",
        "reportname": "Top [5] non-cash withdrawals for the day 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "7",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "9",
        "amlid": "23",
        "alertindicator": "TM2.1 - High value cash deposits in a month",
        "reportname": "Cash deposits greater than INR [1000000.00] for individuals and greater than INR [1000000.00] for non individuals for the period 01-Jun-2024 to 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "10",
        "amlid": "24",
        "alertindicator": "TM2.1 - High value cash deposits in a month",
        "reportname": "Top [100] cash deposits for the period 01-Jun-2024 to 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "62",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "11",
        "amlid": "25",
        "alertindicator": "TM2.2 - High value cash withdrawals in a month",
        "reportname": "Cash withdrawals greater than INR [1000000.00] for individuals and greater than INR [1000000.00] for non individuals for the period 01-Jun-2024 to 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "12",
        "amlid": "26",
        "alertindicator": "TM2.2 - High value cash withdrawals in a month",
        "reportname": "Top [5] cash withdrawals for the period 01-Jun-2024 to 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "2",
        "pouserid": "0",
        "noofrecords": "8",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "13",
        "amlid": "27",
        "alertindicator": "TM2.3 - High value non-cash deposits in a month",
        "reportname": "Non-Cash deposits greater than INR [2500000.00] for individuals and greater than INR [5000000.00] for non individuals for the period 01-Jun-2024 to 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "14",
        "amlid": "28",
        "alertindicator": "TM2.3 - High value non-cash deposits in a month",
        "reportname": "Top [0] non-cash deposits for the period 01-Jun-2024 to 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "214",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "1"
    },
    {
        "id": "15",
        "amlid": "29",
        "alertindicator": "TM2.4 - High value non-cash withdrawals in a month",
        "reportname": "Non-Cash withdrawals greater than INR [1000000.00] for individuals and greater than INR [2500000.00] for non individuals for the period 01-Jun-2024 to 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "16",
        "amlid": "30",
        "alertindicator": "TM2.4 - High value non-cash withdrawals in a month",
        "reportname": "Top [10] non-cash withdrawals for the period 01-Jun-2024 to 01-Jun-2024",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV1.rpt",
        "isverified": "False",
        "branchuserid": "3",
        "pouserid": "3",
        "noofrecords": "12",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "1"
    },
    {
        "id": "17",
        "amlid": "31",
        "alertindicator": "TM3.1 - Sudden high value transaction for the client",
        "reportname": "Value of credit transactions is more than [10] percent of the previous largest credit transaction for the client (or client profile)",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV3.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "18",
        "amlid": "32",
        "alertindicator": "TM3.1 - Sudden high value transaction for the client",
        "reportname": "Value of debit transactions is more than [10] percent of the previous largest debit transaction for the client (or client profile)",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV3.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "19",
        "amlid": "33",
        "alertindicator": "TM3.2 - Sudden increase in value of transaction in a month for the client",
        "reportname": "Value of credit transactions in a month is more than [10.00] percent of the average credit value for the client(or client profile)",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV4.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "83",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "20",
        "amlid": "34",
        "alertindicator": "TM3.2 - Sudden increase in value of transaction in a month for the client",
        "reportname": "Value of debit transactions in a month is more than [10.00] percent of the average debit value for the client(or client profile)",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV4.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "138",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "21",
        "amlid": "35",
        "alertindicator": "TM4.1 - High value Credit transaction in a new account",
        "reportname": "Credit Transaction greater than INR [1000000.00] in newly opened account within [6] months",
        "reportpath": "ReportsRetailBankingAMLTranInNewAccount.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "22",
        "amlid": "36",
        "alertindicator": "TM4.1 - High value Debit transaction in a new account",
        "reportname": "Debit Transaction greater than INR [1000000.00] in newly opened account within [6] months",
        "reportpath": "ReportsRetailBankingAMLTranInNewAccount.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "23",
        "amlid": "37",
        "alertindicator": "TM4.2 - High activity Credit transaction in a new account",
        "reportname": "Number of credit transactions more than [100] in newly opened account within [6] months",
        "reportpath": "ReportsRetailBankingAMLNoOfTranInNewAccount.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "24",
        "amlid": "38",
        "alertindicator": "TM4.2 - High activity Debit transaction in a new account",
        "reportname": "Number of debit transactions more than [100] in newly opened account within [6] months",
        "reportpath": "ReportsRetailBankingAMLNoOfTranInNewAccount.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "25",
        "amlid": "40",
        "alertindicator": "TY1.1 - Splitting of cash deposite just below INR [X2] in multiple accounts in a month",
        "reportname": "Cash deposite in amounts ranging between INR [900000.00] to INR [999999.99] in multiple accounts of the customer greater than [3] times in month",
        "reportpath": "ReportsRetailBankingAMLAntiMoneyLaunderingV2.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "26",
        "amlid": "41",
        "alertindicator": "TM3.4 - Sudden increase in number of transaction in a month for the client",
        "reportname": "Number of credit transactions for the period 01-Jun-2024 to 01-Jun-2024 is more than [3] percent of the average credit number for the client(or client profile)",
        "reportpath": "ReportsRetailBankingAMLAMLNoTrZPercentAvgNoTr.rpt",
        "isverified": "False",
        "branchuserid": "2",
        "pouserid": "0",
        "noofrecords": "82",
        "isdataverifiedbybranch": "1",
        "isdataverifiedbypo": "1"
    },
    {
        "id": "27",
        "amlid": "42",
        "alertindicator": "TM3.4 - Sudden increase in number of transaction in a month for the client",
        "reportname": "Number of debit transactions for the period 01-Jun-2024 to 01-Jun-2024 is more than [10] percent of the average debit number for the client(or client profile)",
        "reportpath": "ReportsRetailBankingAMLAMLNoTrZPercentAvgNoTr.rpt",
        "isverified": "False",
        "branchuserid": "0",
        "pouserid": "0",
        "noofrecords": "158",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "28",
        "amlid": "43",
        "alertindicator": "TY1.3 - Frequent cash deposite just below INR [X2]",
        "reportname": "Cash transaction in amounts ranging between INR [900000.00] to INR [999999.99] greater than [10] times in [7] days",
        "reportpath": "ReportsRetailBankingAMLAMLCashRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "29",
        "amlid": "44",
        "alertindicator": "TY1.6 - Frequent low cash deposite",
        "reportname": "Cash deposite in amounts ranging between INR [900000.00] to INR [999999.99] greater than [10] times in [7] days",
        "reportpath": "ReportsRetailBankingAMLAMLCashRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "30",
        "amlid": "45",
        "alertindicator": "TY1.6 - Frequent low cash withdrawals",
        "reportname": "Cash withdrawals in amounts ranging between INR [900000.00] to INR [999999.99] greater than [10] times in [7] days",
        "reportpath": "ReportsRetailBankingAMLAMLCashRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "31",
        "amlid": "46",
        "alertindicator": "TY1.2 - Splitting of cash deposite just below INR [X2]",
        "reportname": "Deposite of cash in a account in amounts ranging between INR [40000.00] to INR [49999.00] greater than [10] times in [7] days",
        "reportpath": "ReportsRetailBankingAMLAMLCashRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "32",
        "amlid": "47",
        "alertindicator": "TY1.2 - Splitting of cash withdrawal just below INR [X2]",
        "reportname": "Withdrawal of cash in a account in amounts ranging between INR [40000.00] to INR [49999.00] greater than [10] times in [7] days",
        "reportpath": "ReportsRetailBankingAMLAMLCashRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "33",
        "amlid": "48",
        "alertindicator": "TY1.2 - Splitting of cash transaction just below INR [X2]",
        "reportname": "Transaction of cash in a account in amounts ranging between INR [900000.00] to INR [999999.99] greater than [100] times in [30] days",
        "reportpath": "ReportsRetailBankingAMLAMLCashRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "34",
        "amlid": "54",
        "alertindicator": "TY4.1 - Repeated small cash deposite followed by immediate ATM withdrawals in different locations",
        "reportname": "Cash deposit in amounts ranging between INR [90000.00] to INR [99999.99] greater than [10] times in [7] days followed by immediate ATM withdrawals in different locations",
        "reportpath": "ReportsRetailBankingAMLAMLRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "35",
        "amlid": "55",
        "alertindicator": "TY4.2 - Repeated small value transfer from unrelated parties followed by immediate ATM withdrawales",
        "reportname": "Account to account transfer (RTGS/NEFT) from un related parties in amounts ranging between INR [900000.00] to INR [999999.99] greater than [10] times in [7] days followed by immediate ATM withdrawals",
        "reportpath": "ReportsRetailBankingAMLAMLRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "36",
        "amlid": "57",
        "alertindicator": "TY4.4 - Repeated small value withdrawales in sensitive locations",
        "reportname": "cash withdrawals in amounts ranging between INR [90000.00] to INR [99999.99] greater than [10] times in [7] days in locations with known terrorist incidents",
        "reportpath": "ReportsRetailBankingAMLAMLRangeNTimesYDays.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "37",
        "amlid": "61",
        "alertindicator": "TY5.3 - Large value card transactions for purchase of high value goods",
        "reportname": "Card usage greater than INR [100000.00] for jewellery (MCC 5944) in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "38",
        "amlid": "64",
        "alertindicator": "TY5.6 - Large repetitive card usage at same merchant",
        "reportname": "More than [N] transactions at same merchant aggregating to more than INR [X] in [Y] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "76",
        "amlid": "142",
        "alertindicator": "TY5.6 - Large repetitive card usage at same merchant",
        "reportname": "More than [10] Credit transactions at same merchant aggregating to more than INR [100000.00] in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "77",
        "amlid": "143",
        "alertindicator": "TY5.6 - Large repetitive card usage at same merchant",
        "reportname": "More than [10] Debit transactions at same merchant aggregating to more than INR [100000.00] in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "39",
        "amlid": "65",
        "alertindicator": "TY7.1 - Repayment of loan in cash",
        "reportname": "Loan repyaments in cash greater than INR [100000.00] \n\t\t\t\t\t\t\t\t\t\t  in [6]  months",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "40",
        "amlid": "66",
        "alertindicator": "TY7.2 - Premature closure of large FDR thought PO/DD",
        "reportname": "Premature closure of FDR for amount greater than INR [500000.00] within [10] days and payment by PO/DD",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "41",
        "amlid": "67",
        "alertindicator": "TY7.3 - High number of cheque leaves",
        "reportname": "Greater than [X1] number cheque leaves issued for saving bank account and [X2] number leaves issues for current account in a period [Y] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "42",
        "amlid": "68",
        "alertindicator": "TY7.4 - Ferquent locker operations",
        "reportname": "Number locker operation greater than [100.00] times in [10] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "43",
        "amlid": "69",
        "alertindicator": "RM1.1 - High value transaction by high risk customer",
        "reportname": "Transaction greater than INR [1000000.00] by high risk customers(refer to appendix A )",
        "reportpath": "ReportsRetailBankingAMLTranInNewAccount.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "70",
        "amlid": "133",
        "alertindicator": "RM1.1 - High value transaction by high risk customer",
        "reportname": "Credit Transaction greater than INR [1000000.00] by high risk customers(refer to appendix A )",
        "reportpath": "ReportsRetailBankingAMLTranInNewAccount.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "71",
        "amlid": "134",
        "alertindicator": "RM1.1 - High value transaction by high risk customer",
        "reportname": "Debit Transaction greater than INR [1000000.00] by high risk customers(refer to appendix A )",
        "reportpath": "ReportsRetailBankingAMLTranInNewAccount.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "44",
        "amlid": "70",
        "alertindicator": "RM1.2 - High value cash transactions in NPO",
        "reportname": "Cash transaction greater than INR [500000.00] in trust/NGO/NPO in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "72",
        "amlid": "135",
        "alertindicator": "RM1.2 - High value cash transactions in NPO",
        "reportname": "Cash Credit transaction greater than INR [500000.00] in trust/NGO/NPO in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "73",
        "amlid": "136",
        "alertindicator": "RM1.2 - High value cash transactions in NPO",
        "reportname": "Cash Debit transaction greater than INR [500000.00] in trust/NGO/NPO in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "45",
        "amlid": "71",
        "alertindicator": "RM1.3 - High value cash transaction related to real estate",
        "reportname": "Cash transaction greater than INR [500000.00]  related to real estate transaction in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "74",
        "amlid": "137",
        "alertindicator": "RM1.3 - High value cash transaction related to real estate",
        "reportname": "Cash Credit transaction greater than INR [500000.00]  related to real estate transaction in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "75",
        "amlid": "138",
        "alertindicator": "RM1.3 - High value cash transaction related to real estate",
        "reportname": "Cash Debit transaction greater than INR [500000.00]  related to real estate transaction in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "46",
        "amlid": "72",
        "alertindicator": "RM1.4 - High value cash transaction by dealer in precious metal or stone",
        "reportname": "Cash transaction greater than INR [500000.00] by dealer in precious metal,precious stones or high value goods in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "47",
        "amlid": "73",
        "alertindicator": "RM2.1 - High value transaction in product/services high ML risk",
        "reportname": "Transaction greater than INR [500000.00] using product/ services with high ML risk (refer appendix B)",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "78",
        "amlid": "144",
        "alertindicator": "RM2.1 - High value transaction in product/services high ML risk",
        "reportname": "Credit Transaction greater than INR [500000.00] using product/ services with high ML risk (refer appendix B)",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "79",
        "amlid": "145",
        "alertindicator": "RM2.1 - High value transaction in product/services high ML risk",
        "reportname": "Debit Transaction greater than INR [500000.00] using product/ services with high ML risk (refer appendix B)",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "48",
        "amlid": "74",
        "alertindicator": "RM2.2 - High value inward remittance",
        "reportname": "Inward remittance greater than [1000000.00] value aggregated in [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "49",
        "amlid": "75",
        "alertindicator": "RM2.3 - Inward remittance in a new account",
        "reportname": "Inward remittance greater than [1000000.00]  value in new account within [7] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "50",
        "amlid": "76",
        "alertindicator": "RM2.4 - Inward remittance inconsistent with v",
        "reportname": "Inward remittance greater than [500000.00]  value in [7] days in account of students, housewife, pensioners, wages and salary person and minor accounts",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "80",
        "amlid": "148",
        "alertindicator": "RM3.3 - High value transactions in a location with high ML risk",
        "reportname": "Credit Transaction greater than INR [500000.00] involving a location considered to be high risk from the money laundering or drug trafficking perspective",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "81",
        "amlid": "149",
        "alertindicator": "RM3.3 - High value transactions in a location with high ML risk",
        "reportname": "Debit Transaction greater than INR [500000.00] involving a location considered to be high risk from the money laundering or drug trafficking perspective",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "51",
        "amlid": "83",
        "alertindicator": "ST1.1 - ",
        "reportname": "Clients Having Credit Transaction More Than Given Income Slab",
        "reportpath": "ReportsRetailBankingAMLAMLTransactionOverIncomeDetails.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "52",
        "amlid": "84",
        "alertindicator": "ST1.1 - ",
        "reportname": "Clients Having Multiple Accounts",
        "reportpath": "ReportsRetailBankingAMLAMLMultipleAccounts.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "53",
        "amlid": "85",
        "alertindicator": "ST1.1 - ",
        "reportname": "Clients Having Same Contact Number",
        "reportpath": "ReportsRetailBankingAMLAMLSameContactNo.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "54",
        "amlid": "86",
        "alertindicator": "ST1.1 - ",
        "reportname": "Clients Having Same PAN Number",
        "reportpath": "ReportsRetailBankingAMLAMLSamePANNo.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "55",
        "amlid": "87",
        "alertindicator": "ST1.1 - ",
        "reportname": "Clients Having Credit Transaction More Than Transaction Limit and No PAN",
        "reportpath": "ReportsRetailBankingAMLAMLTransactionOverIncomeWithNoPAN.rpt",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "56",
        "amlid": "88",
        "alertindicator": "ST1.1 - ",
        "reportname": "Counterfeit Currency Reporting (CCR)",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "57",
        "amlid": "102",
        "alertindicator": "El1.1 - Customer did not complete transaction",
        "reportname": "Customer did not complete transaction after queries such source of funds etc",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "58",
        "amlid": "103",
        "alertindicator": "El2.1 - Customeris nervous",
        "reportname": "Customer is hurried or nervous",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "59",
        "amlid": "104",
        "alertindicator": "El2.2 - Customer is.over cautaous",
        "reportname": "Customer over cautious in explaining genuineness of the transaction.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "60",
        "amlid": "106",
        "alertindicator": "El2.3 - Customer provides inconsistent information",
        "reportname": "Customer provides information that seems minimal possibly false or inconsistent.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "61",
        "amlid": "107",
        "alertindicator": "El3.1 - Customer acting on behalf of a third party",
        "reportname": "Customer has vague knowledge about amount of money involved in the trransaction.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "62",
        "amlid": "108",
        "alertindicator": "El3.1 - Customer acting on behalf of a third party",
        "reportname": "Customer taking instructions for conducting transaction.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "63",
        "amlid": "111",
        "alertindicator": "TM5.1 - High value transactions in a dormant account",
        "reportname": "Transactions greater than INR [500000.00] n dormant account within [7] days of reactivation.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "82",
        "amlid": "150",
        "alertindicator": "TM5.1 - High value transactions in a dormant account",
        "reportname": "Credit Transactions greater than INR [500000.00] n dormant account within [7] days of reactivation.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "83",
        "amlid": "151",
        "alertindicator": "TM5.1 - High value transactions in a dormant account",
        "reportname": "Debit Transactions greater than INR [500000.00] n dormant account within [7] days of reactivation.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "64",
        "amlid": "112",
        "alertindicator": "TM5.2 - Sudden activity in a dormant account",
        "reportname": "Number of transactions more than [N] in dormant account within [Y] days of reactivation",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "84",
        "amlid": "152",
        "alertindicator": "TM5.2 - Sudden activity in a dormant account",
        "reportname": "Number of Credit transactions more than [100]  in dormant account within [7] days of reactivation",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "85",
        "amlid": "153",
        "alertindicator": "TM5.2 - Sudden activity in a dormant account",
        "reportname": "Number of Debit transactions more than [100]  in dormant account within [7] days of reactivation",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "65",
        "amlid": "113",
        "alertindicator": "TM6.1 - High value cash transactions inconsistent with profile",
        "reportname": "Cash transactions greater than INR[X] by customer with low cash requirements such as Students, Housewife, Pensioners, Wages and salary person and Minor Accounts",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "86",
        "amlid": "154",
        "alertindicator": "TM6.1 - High value cash transactions inconsistent with profile",
        "reportname": "Cash Credit transactions greater than INR [200000] by customer with low cash requirements such as Students, Housewife, Pensioners, Wages and salary person and Minor Accounts",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "87",
        "amlid": "155",
        "alertindicator": "TM6.1 - High value cash transactions inconsistent with profile",
        "reportname": "Cash Debit transactions greater than INR [200000] by customer with low cash requirements such as Students, Housewife, Pensioners, Wages and salary person and Minor Accounts",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "66",
        "amlid": "114",
        "alertindicator": "TM6.2 - High cash activity inconsistent with profile",
        "reportname": "Number of cash transactions grater than [X] by customer with low cash requirements such as Students, Housewife, Pensioners, Wages and salary Person and Minor Accounts.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "88",
        "amlid": "156",
        "alertindicator": "TM6.2 - High cash activity inconsistent with profile",
        "reportname": "Number of cash Credit transactions grater than [X] by customer with low cash requirements such as Students, Housewife, Pensioners, Wages and salary Person and Minor Accounts.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "89",
        "amlid": "157",
        "alertindicator": "TM6.2 - High cash activity inconsistent with profile",
        "reportname": "Number of cash Debit transactions grater than [X] by customer with low cash requirements such as Students, Housewife, Pensioners, Wages and salary Person and Minor Accounts.",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "67",
        "amlid": "115",
        "alertindicator": "TY1.4 - Routing of funds through multiple accounts",
        "reportname": "Transactions greater than INR[X1] between more than [N] accounts aggregating to more than [X2] on the same day",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "90",
        "amlid": "158",
        "alertindicator": "TY1.4 - Routing of funds through multiple accounts",
        "reportname": "Credit Transactions greater than INR [499999.00] between more than [5] accounts aggregating to more than [999999.00] on the same day",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "91",
        "amlid": "159",
        "alertindicator": "TY1.4 - Routing of funds through multiple accounts",
        "reportname": "Debit Transactions greater than INR [499999.00] between more than [5] accounts aggregating to more than [999999.00] on the same day",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "68",
        "amlid": "116",
        "alertindicator": "TY1.5 - Frequent low cash deposits",
        "reportname": "Cash deposits in amounts ranging between INR[X1] to [X2] greater than [N] times in [Y] days",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "69",
        "amlid": "121",
        "alertindicator": "TM3.3 - Sudden increase in number of transaction in month for the client",
        "reportname": "Number of transactions in a month ins more than [Z] percent of the average number for the client (or client profile)",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "92",
        "amlid": "160",
        "alertindicator": "TM3.3 - Sudden increase in number of transaction in month for the client",
        "reportname": "Number of Credit transactions in a month is more than [Z] percent of the average number for the client (or client profile)",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    },
    {
        "id": "93",
        "amlid": "161",
        "alertindicator": "TM3.3 - Sudden increase in number of transaction in month for the client",
        "reportname": "Number of Debit transactions in a month is more than [Z] percent of the average number for the client (or client profile)",
        "reportpath": "",
        "isverified": "False",
        "branchuserid": "",
        "pouserid": "",
        "noofrecords": "0",
        "isdataverifiedbybranch": "0",
        "isdataverifiedbypo": "0"
    }
])


  const createtable = () =>{
    const data = firstGridData
    console.log("Alert Grid Data", data)
    const container = document.getElementById('uxTable');
    container.classList.remove('hidden');
    container.style.removeProperty('display');

    // Clear existing content
    container.innerHTML = '';

    // Create table container for height and overflow control
    const tableContainer = document.createElement('div');
    tableContainer.style.height = "60vh";
    tableContainer.style.overflow = "auto";
    tableContainer.style.scrollbarWidth = "none"; // For Firefox
    tableContainer.style.msOverflowStyle = "none"; // For Internet Explorer
    tableContainer.style.position = "relative";
    tableContainer.style.background = "#fff"; // Optional for better UI contrast

    // Hide scrollbars
    tableContainer.style.overflowY = "scroll";
    tableContainer.style.overflowX = "hidden";
    tableContainer.style.padding = "15px";

    // Create table
    const table = document.createElement('table');
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.border = "1";

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // Define headers
    const headers = ['    ', 'Alert', ' ', 'No Of Record', 'Is Verified'];
    headers.forEach((headerText) => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.padding = "10px";
        th.style.border = "1px solid #ccc";
        th.style.textAlign = "left";
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    data.forEach(async (item) => {
        const row = document.createElement('tr');
        row.setAttribute('noOfRecord', item.noofrecords); // Store "No Of Record" value as an attribute

        // Radio button column
        const radioCell = document.createElement('td');
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'amlSelection'; // Group radio buttons
        radioButton.value = item.amlid; // Bind amlid to the value
        radioButton.style.border = "1px solid #ccc";
        radioButton.title = `${item.amlid}`;
        radioButton.setAttribute("reportname", item.reportname);
        radioButton.setAttribute("pouserid", item.pouserid);
        radioButton.onchange = (event) => {
            event.preventDefault()
            const reportName = event.target.getAttribute('reportname');
            const pouserid = event.target.getAttribute('pouserid');
            let selectedAmlId = event.target.value;  // Get the amlid of the selected radio button
            _IsShowAlert = true
            radioButtonChange(selectedAmlId, reportName, pouserid)
        }
        //radioButton.addEventListener("change", radioButtonChange)

        // Disable the radio button if noofrecords is zero
        if (parseInt(item.noofrecords, 10) === 0) {
            radioButton.disabled = true; // Disable the radio button
            row.disabled = true;
        }

        // Center align the radio button
        radioCell.style.textAlign = "center";
        radioCell.style.padding = "15px"
        radioCell.appendChild(radioButton);
        row.appendChild(radioCell);

        // Alert indicator column
        const indicatorCell = document.createElement('td');
        indicatorCell.textContent = item.alertindicator;
        indicatorCell.style.padding = "10px";
        indicatorCell.style.border = "1px solid #ccc";
        row.appendChild(indicatorCell);

        // Report name column
        const reportNameCell = document.createElement('td');
        reportNameCell.textContent = item.reportname;
        reportNameCell.style.padding = "10px";
        reportNameCell.style.border = "1px solid #ccc";
        row.appendChild(reportNameCell);

        // No Of Record column
        const noofrecordCell = document.createElement('td');
        noofrecordCell.textContent = item.noofrecords;
        noofrecordCell.style.padding = "10px";
        noofrecordCell.style.border = "1px solid #ccc";
        row.appendChild(noofrecordCell);

        // Fetch and display count in the "Verified" column
        //const _uxDate = getAsOnDate();
        //const _OrgElementID = session.selectedOrgElementId || session.user.OrgElementId;

        //const verifyCell = document.createElement('td');
        //verifyCell.textContent = 'Loading...'; // Placeholder while fetching
        //try {
        //    const count = await fetchTotalVerifiedRecords(item.amlid, _OrgElementID, _uxDate);
        //    verifyCell.textContent = count > 0 ? count : 'No Records'; // Update with fetched count
        //} catch (err) {
        //    verifyCell.textContent = 'Error'; // Display error if any
        //    console.error("Error fetching verified records:", err);
        //}
        //verifyCell.style.padding = "10px";
        //verifyCell.style.border = "1px solid #ccc";
        //row.appendChild(verifyCell);


        // Details button column
        const detailsCell = document.createElement('td');
        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Details';
        detailsButton.style.margin = "5px";
        detailsButton.style.border = "none";
        detailsButton.className = "btn btn-link";
        detailsButton.style.cursor = 'pointer';
        detailsButton.style.display = "none"; // Initially hidden
        detailsButton.setAttribute("reportname", item.reportname);
        detailsButton.setAttribute("amlid", item.amlid);
        detailsButton.style.cursor = 'pointer';

        detailsButton.onclick = (e) => {
            e.preventDefault();
            const reportName = e.target.getAttribute('reportname'); // Get the reportname attribute
            const amlid = e.target.getAttribute('amlid'); // Get the amlId attribute
            showDetailsPopup(amlid, reportName); // Pass reportname to the function
        };
        detailsCell.appendChild(detailsButton);
        row.appendChild(detailsCell);

        //// ** Apply Row Colors Based on Conditions **
        //if (item.isdataverifiedbybranch === "1") {
        //    row.style.backgroundColor = "orange"; // Orange for branch data verified
        //} else if (item.isdataverifiedbypo === "1") {
        //    row.style.backgroundColor = "Khaki"; // Khaki for PO data verified
        //}


        // Fetch total and verified counts, then apply row colors based on conditions
        try {
            const _uxDate = getAsOnDate();
            const _OrgElementID = session.selectedOrgElementId || session.user.OrgElementId;
            const totalVerifiedCount = await fetchTotalAndVerifiedRecords(item.amlid, _OrgElementID, _uxDate);
            if (totalVerifiedCount.total > 0) {
                if (totalVerifiedCount.total === totalVerifiedCount.verified) {
                    debugger;
                    // Total verified count matches verified count
                    row.style.backgroundColor = "orange";
                    detailsButton.style.display = "inline-block"

                } else if (totalVerifiedCount.verified > 0) {
                    // Some Record Verify
                    row.style.backgroundColor = "#289995";
                    detailsButton.style.display = "inline-block"
                } else {
                    // Default or no color
                    row.style.backgroundColor = "white"; // Optional
                }
            } else {
                row.style.backgroundColor = "white"; // Optional
            }
        } catch (err) {
            console.error("Error applying row colors:", err);
            row.style.backgroundColor = "purple"; // Optional for error indication
        }

        if (item.pouserid > 0) {
            // Marked by PO
            debugger;
            row.style.backgroundColor = "Khaki";

        }

        tbody.appendChild(row);
        // Optionally, you can call the checkbox function right here (if needed):
        const checkbox = document.getElementById('uxExcludeZero'); // Get checkbox by ID

        filterRowsBasedOnCheckbox(checkbox, tbody);  // Call the filtering function after table is generated

        checkbox.addEventListener('change', () => {
            filterRowsBasedOnCheckbox(checkbox, tbody); // Reapply filtering when checkbox state changes
        });


    });

    table.appendChild(tbody);
    tableContainer.appendChild(table); // Append table to container
    container.appendChild(tableContainer); // Append table container to uxAMLAlertGrid
  }
    

  const clickHandle = async(e) =>{
           e.preventDefault()
   alert("click")
   createtable()
   try {
    const response = await fetch("https://api.example.com/data"); // API endpoint
    const data = await response.json();
    setfirstGridData(data); // Set the data in state
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  }

  return (
    <div style={boxStyle}>
      <div className="flex flex-wrap gap-6 justify-start p-6">
        {/* Dropdown */}
        <select
          className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)} // Update selected option on change
        >
          <option value="">Select Option</option>
          {dropdownOptions.length > 0 ? (
            dropdownOptions.map((option) => (
              <option key={option.orgelementid} value={option.orgelementid}>
                {option.name} {/* Replace with actual fields */}
              </option>
            ))
          ) : (
            <option disabled>Loading options...</option> // Loading state
          )}
        </select>

        {/* Datepicker */}
        <input
          type="date"
          className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />

        {/* Checkbox with Label */}
        <label className="flex items-center space-x-2 text-lg">
          <input type="checkbox" className="border-gray-300 rounded" />
          <span className="text-gray-700">Exclude Zero</span>
        </label>

        {/* Go Button */}
      <button onClick={clickHandle}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
        Go
      </button>
      </div>
     <div id="uxTable"></div>
    </div>
  );
};

export default BranchamlMarking;