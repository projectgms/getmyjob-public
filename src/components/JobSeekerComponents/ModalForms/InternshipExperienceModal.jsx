import React from "react";
import { IoMdClose } from "react-icons/io";
import InputField from "./../ReusableComponents/InputField";
import { Form, Formik, Field } from "formik";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import ChipsComponent from './../ReusableComponents/ChipsComponent';
import {
  saveTempInternshipDetails,
  editTempInternshipExperience,
  editFinalInternshipExperience,
} from "../../../store/slices/profileFormsSlice";


const validationSchema = Yup.object().shape({
  title: Yup.string().required("Internship Title is required"),
  organisation: Yup.string().required("Organisation is required"),
  industrySector: Yup.string().required("Industry Sector is required"),
  department: Yup.string().required("Department is required"),
  stipend: Yup.number()
    .typeError("Stipend must be a number")
    .positive("Stipend must be a positive number")
    .nullable(),
  from: Yup.date().required("Start date is required"),
  to: Yup.date()
    .nullable()
    .test("is-required", "End date is required", function (value) {
      const { currentlyWorking } = this.parent;
      return currentlyWorking ? true : !!value;
    })
    .test("date-order", "End date must be after start date", function (value) {
      const { from } = this.parent;
      return value ? new Date(value) > new Date(from) : true;
    }),
  currentlyWorking: Yup.boolean(),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  skills: Yup.array()
    .min(1, "At least one skill is required")
    .required("Skills are required"),
  description: Yup.string()
    .required("Description is required")
    .max(500, "Description must be at most 500 characters"),
});

function InternshipExperienceModal({
  onClose,
  onSubmit,
  initialValues,
  isEditing,
  isEditingTemp,
  editIndex,
}) {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative p-4 w-full max-w-4xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {isEditing ? "Edit Internship Experience" : "Add Internship Experience"}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <Formik
              enableReinitialize // ✅ Ensures values update when editing
              initialValues={initialValues} // ✅ Correctly passing initial values
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Form Submitted: ", values);

                if (isEditing) {
                  if (isEditingTemp) {
                    dispatch(editTempInternshipExperience({ index: editIndex, updatedData: values }));
                  } else {
                    dispatch(editFinalInternshipExperience({ index: editIndex, updatedData: values }));
                  }
                } else {
                  dispatch(saveTempInternshipDetails(values));
                }

                onSubmit(values);
                onClose();
              }}
            >
              {({ handleSubmit, values, setFieldValue }) => (
                <Form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                  <Field name="title">
                    {({ field }) => <InputField label="Internship Title" {...field} />}
                  </Field>
                  <Field name="organisation">
                    {({ field }) => <InputField label="Organisation" {...field} />}
                  </Field>
                  <Field name="industrySector">
                    {({ field }) => <InputField label="Industry Sector" {...field} />}
                  </Field>
                  <Field name="department">
                    {({ field }) => <InputField label="Department" {...field} />}
                  </Field>
                  <Field name="stipend">
                    {({ field }) => <InputField label="Stipend (if any)" {...field} />}
                  </Field>
                  <div className="col-span-2 grid grid-cols-3 gap-4 items-center">
                    <Field name="from">
                      {({ field }) => <InputField label="From" type="date" {...field} />}
                    </Field>
                    <Field name="to">
                      {({ field }) => (
                        <InputField label="To" type="date" {...field} disabled={values.currentlyWorking} />
                      )}
                    </Field>
                    <label className="flex items-center">
                      <Field
                        type="checkbox"
                        name="currentlyWorking"
                        className="mr-2"
                        onChange={(e) => setFieldValue("currentlyWorking", e.target.checked)}
                      />
                      I am currently working here
                    </label>
                  </div>
                  <Field name="country">
                    {({ field }) => <InputField label="Country" {...field} />}
                  </Field>
                  <Field name="state">
                    {({ field }) => <InputField label="State" {...field} />}
                  </Field>
                  <Field name="city">
                    {({ field }) => <InputField label="City" {...field} />}
                  </Field>
                  <div className="col-span-2">
                    <Field name="skills">
                      {({ field, form }) => (
                        <ChipsComponent label="Skills" name="skills" placeholder="Enter Your Skills Here" form={form} />
                      )}
                    </Field>
                  </div>
                  <Field name="description">
                    {({ field }) => <InputField label="Description" {...field} />}
                  </Field>
                  <div className="col-span-2 flex justify-end">
                    <button
                      type="button"
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ms-3 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      {isEditing ? "Update" : "Save"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipExperienceModal;
