import React, { useState } from "react";
import locations from "../../dummydata/locations"; // Location Data
import industries from "../../dummydata/industries"; // Industry Data
import skills from "../../dummydata/skills";        // Skills Data

const withChipInput = (WrappedComponent) => {
  return ({ values, setFieldValue, fieldName, placeholder, label, type }) => {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // Dynamically filter suggestions based on the 'type' prop
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);

      if (value.trim()) {
        let dataSource = [];

        if (type === "location") {
          // Flatten locations into a single array: [state, ...cities]
          dataSource = locations.flatMap(({ state, cities }) => [state, ...cities]);
        } else if (type === "industry") {
          dataSource = industries;
        } else if (type === "skills") {
          dataSource = skills;
        }

        // Filter and limit suggestions to 5
        const filteredSuggestions = dataSource
          .filter((item) => item.toLowerCase().startsWith(value.toLowerCase()))
          .slice(0, 5);

        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    };

    // Handle Enter key to add a chip
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && inputValue.trim()) {
        e.preventDefault();
        if (values[fieldName].length < 5 && !values[fieldName].includes(inputValue.trim())) {
          const newValues = [...(values[fieldName] || []), inputValue.trim()];
          setFieldValue(fieldName, newValues);
          console.log(`Field: ${fieldName}, Value: ${newValues}`);

          setInputValue("");
          setSuggestions([]);
        }
      }
    };

    // Handle click on a suggestion
    const handleSuggestionClick = (suggestion) => {
      if (values[fieldName].length < 5 && !values[fieldName].includes(suggestion)) {
        const newValues = [...(values[fieldName] || []), suggestion];
        setFieldValue(fieldName, newValues);
        console.log(`Field: ${fieldName}, Value: ${newValues}`);

        setInputValue("");
        setSuggestions([]);
      }
    };

    // Remove a chip
    const removeChip = (index) => {
      const updatedValues = values[fieldName].filter((_, i) => i !== index);
      setFieldValue(fieldName, updatedValues);
    };

    return (
      <div className="relative">
        <label className="block text-gray-700 font-medium">
          {label} (Max 5)
        </label>

        {/* Selected Items as Chips */}
        <div className="flex flex-wrap gap-2 mt-2">
          {values[fieldName]?.map((item, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-2"
            >
              {item}
              <button
                type="button"
                onClick={() => removeChip(index)}
                className="text-white font-bold"
              >
                ✖
              </button>
            </span>
          ))}
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full border rounded-md p-2 mt-2 focus:ring focus:ring-blue-400"
        />

        {/* Dropdown Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border mt-1 w-full rounded-md shadow-md z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
};

export default withChipInput;
