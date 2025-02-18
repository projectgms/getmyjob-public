import React from "react";
import { IoMdClose } from "react-icons/io";
import InputField from "./InputField";
import { Form, Formik, Field } from "formik";
import ChipsComponent from "./ChipsComponent";

function InternshipExperienceModal({ onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative p-4 w-full max-w-4xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add Internship Experience
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
              initialValues={{
                title: "",
                organisation: "",
                industrySector: "",
                department: "",
                stipend: "",
                from: "",
                to: "",
                currentlyWorking: false,
                country: "",
                state: "",
                city: "",
                skills: "", 
                description: "",
              }}
              onSubmit={(values) => {
                console.log("Form Submitted: ", values);
                onSubmit(values);
                onClose();
              }}
            >
              {({ handleSubmit, values, setFieldValue }) => (
                <Form
                  className="grid grid-cols-2 gap-4"
                  onSubmit={handleSubmit}
                >
                  <Field name="title">
                    {({ field }) => (
                      <InputField label="Internship Title" {...field} />
                    )}
                  </Field>
                  <Field name="organisation">
                    {({ field }) => (
                      <InputField label="Organisation" {...field} />
                    )}
                  </Field>
                  <Field name="industrySector">
                    {({ field }) => (
                      <InputField label="Industry Sector" {...field} />
                    )}
                  </Field>
                  <Field name="department">
                    {({ field }) => (
                      <InputField label="Department" {...field} />
                    )}
                  </Field>
                  <Field name="stipend">
                    {({ field }) => (
                      <InputField label="Stipend (if any)" {...field} />
                    )}
                  </Field>
                  <div className="col-span-2 grid grid-cols-3 gap-4 items-center">
                    <Field name="from">
                      {({ field }) => (
                        <InputField label="From" type="date" {...field} />
                      )}
                    </Field>
                    <Field name="to">
                      {({ field }) => (
                        <InputField
                          label="To"
                          type="date"
                          {...field}
                          disabled={values.currentlyWorking}
                        />
                      )}
                    </Field>
                    <label className="flex items-center">
                      <Field
                        type="checkbox"
                        name="currentlyWorking"
                        className="mr-2"
                        onChange={(e) =>
                          setFieldValue("currentlyWorking", e.target.checked)
                        }
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
                  <div className="col-span-2 grid grid-cols-1 gap-4 items-center">
                    <Field name="skills">
                      {({ field, form }) => (
                        <ChipsComponent
                          label="Skills"
                          name="skills"
                          placeholder="Enter Your Skills Here"
                          form={form}
                        />
                      )}
                    </Field>
                    <Field name="description">
                      {({ field }) => (
                        <InputField label="Description" {...field} />
                      )}
                    </Field>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <button
                      type="button"
                      className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ms-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Save
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
