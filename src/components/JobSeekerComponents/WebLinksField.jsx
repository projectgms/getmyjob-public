import React, { useState } from "react";
import { Field, FieldArray, ErrorMessage } from "formik";
import { FaPlus, FaTrash } from "react-icons/fa";

const webLinkOptions = [
  { label: "Select Platform", value: "" },
  { label: "Skype", value: "skype" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "GitHub", value: "github" },
  { label: "Twitter", value: "twitter" },
];

function WebLinksField({ name }) {
  return (
    <FieldArray name={name}>
      {({ push, remove, form }) => (
        <div className="space-y-2">
          {form.values[name].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              {/* Dropdown for selecting platform */}
              <Field
                as="select"
                name={`${name}.${index}.platform`}
                className="border rounded-md px-3 py-2"
              >
                {webLinkOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              
              {/* Input field for URL */}
              <Field
                type="url"
                name={`${name}.${index}.url`}
                placeholder="Enter URL"
                className="border rounded-md px-3 py-2 w-full"
              />
              
              <ErrorMessage
                name={`${name}.${index}.url`}
                component="div"
                className="text-red-500 text-xs"
              />
              
              {/* Remove button */}
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              )}
            </div>
          ))}
          
          {/* Add new link button */}
          <button
            type="button"
            onClick={() => push({ platform: "", url: "" })}
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <FaPlus /> Add new
          </button>
        </div>
      )}
    </FieldArray>
  );
}

export default WebLinksField;
