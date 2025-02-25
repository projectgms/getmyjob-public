import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../../../store/slices/admin/searchSlice"; // ✅ Ensure correct import

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchQuery(event.target.value)); // ✅ Dispatch action correctly
  };

  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Search Jobseekers..."
        onChange={handleSearchChange}
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
