import  { useState, useEffect } from "react";


const BranchamlMarking = () => {
  const [dropdownOptions, setDropdownOptions] = useState([]); // State to store dropdown data
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
              <option key={option.id} value={option.id}>
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
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
        Go
      </button>

       
      </div>
    </div>
  );
};

export default BranchamlMarking;