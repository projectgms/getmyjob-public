import React from 'react'
import InputField from './InputField';
import DropDown from './DropDown';
import { Form, Formik, Field } from 'formik';

function EducationDetailsModal({ onClose, title, onSubmit }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="relative p-4 w-full max-w-4xl max-h-full">
      <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title} Details</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <Formik
            initialValues={{
              degree: "",
              stream: "",
              college: "",
              collegeCity: "",
              joiningYear: "",
              completionYear: "",
              graduationType: "",
              aggregateType: "",
              aggregate: "",
              max: "",
              activeBacklogs: "",
            }}
            onSubmit={(values) => {
              console.log("Form Submitted: ", values);
              onSubmit(values);
              onClose();
            }}
          >
            {({ handleSubmit }) => (
              <Form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <Field name="degree">
                  {({ field }) => <InputField label="Degree " {...field} />}
                </Field>
                <Field name="stream">
                  {({ field }) => <InputField label="Stream" {...field} />}
                </Field>
                <Field name="college">
                  {({ field }) => <InputField label="College " {...field} />}
                </Field>
                <Field name="collegeCity">
                  {({ field }) => <InputField label="College City" {...field} />}
                </Field>
                <Field name="joiningYear">
                  {({ field }) => <InputField label="Joining Year" type="number" {...field} />}
                </Field>
                <Field name="completionYear">
                  {({ field }) => <InputField label="Completion Year " type="number" {...field} />}
                </Field>
                <Field name="graduationType">
                  {({ field }) => (
                    <DropDown
                      label="Graduation Type"
                      {...field}
                      options={[
                        { label: "Full-time", value: "fulltime" },
                        { label: "Part-time", value: "parttime" },
                        { label: "Correspondence", value: "correspondence" },
                      ]}
                    />
                  )}
                </Field>
                <Field name="aggregateType">
                  {({ field }) => (
                    <DropDown
                      label="Aggregate Type "
                      {...field}
                      options={[
                        { label: "Percentage", value: "percentage" },
                        { label: "CGPA", value: "cgpa" },
                      ]}
                    />
                  )}
                </Field>
                <Field name="aggregate">
                  {({ field }) => <InputField label="Aggregate " type="number" {...field} />}
                </Field>
                <Field name="max">
                  {({ field }) => <InputField label="Max " type="number" {...field} />}
                </Field>
                <Field name="activeBacklogs">
                  {({ field }) => <InputField label="Active Backlogs" type="number" {...field} />}
                </Field>
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
  )
}

export default EducationDetailsModal
