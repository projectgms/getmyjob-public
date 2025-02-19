import React, { useState } from "react";
import {  IoMdAddCircleOutline } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";

function ReusableInputList({ title, btnText }) {
  const [items, setItems] = useState([""]);

  const handleAddField = () => {
    setItems([...items, ""]);
  };

  const handleChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const handleRemoveField = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="w-full">
      <h3 className="block text-gray-700 font-medium mb-2">Add {title}</h3>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mb-2">
          <input
            type="text"
            value={item}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Please enter any ${title.toLowerCase()}`}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={() => handleRemoveField(index)}
            className="text-gray-600 hover:text-red-600"
          >
            <AiTwotoneDelete size={20} />
          </button>
        </div>
      ))}
      <button
        onClick={handleAddField}
        className="flex items-center text-blue-600 hover:text-blue-700 mt-2 font-semibold justify-end w-full py-2"
      >
        <IoMdAddCircleOutline size={18} className="mr-1" /> {btnText}
      </button>
    </div>
  );
}

export default ReusableInputList;
