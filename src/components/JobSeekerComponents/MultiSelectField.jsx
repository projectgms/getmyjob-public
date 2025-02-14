import Select from "react-select";
import { useField } from "formik";

const MultiSelectField = ({ label, name, options }) => {
  const [field, , { setValue }] = useField(name);

  const handleChange = (selectedOptions) => {
    setValue(selectedOptions ? selectedOptions.map((option) => option.value) : []);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">{label}</label>
      <Select
        isMulti
        name={name}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        value={options.filter((option) => field.value.includes(option.value))}
      />
    </div>
  );
};

export default MultiSelectField;
