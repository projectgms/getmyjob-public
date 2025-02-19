import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import InputField from "./InputField";
import { Form, Formik, Field } from "formik";
import ChipsComponent from "./ChipsComponent";

function ResearchPaperModal({ onClose, onSubmit }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="relative p-4 w-full max-w-4xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add Research Paper
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
                  name: "",
                  publicationName: "",
                  publicationDate: "",
                  mentor: "",
                  authorsCount: "",
                  type: "",
                  skills: [],
                  description: "",
                }}
                onSubmit={(values) => {
                  console.log("Form Submitted: ", values);
                  if (typeof onSubmit === "function") {  // ✅ Ensure `onSubmit` is a function
                    onSubmit(values);
                  } else {
                    console.error("onSubmit is not a function", onSubmit);
                  }
                  onClose();
                }}
              >
                {({ handleSubmit }) => (
                  <Form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    <Field name="name">
                      {({ field }) => (
                        <InputField label="Research Paper Name" {...field} />
                      )}
                    </Field>
                    <Field name="publicationName">
                      {({ field }) => (
                        <InputField label="Publication Name" {...field} />
                      )}
                    </Field>
                    <Field name="publicationDate">
                      {({ field }) => (
                        <InputField label="Publication Date" type="date" {...field} />
                      )}
                    </Field>
                    <Field name="mentor">
                      {({ field }) => <InputField label="Mentor" {...field} />}
                    </Field>
                    <Field name="authorsCount">
                      {({ field }) => (
                        <InputField label="No. of Authors" {...field} />
                      )}
                    </Field>
                    <Field name="type">
                      {({ field }) => <InputField label="Type" {...field} />}
                    </Field>
                    <div className="col-span-2 grid grid-cols-1 gap-4 items-center">
                      <Field name="skills">
                        {({ field, form }) => (
                          <ChipsComponent
                            label="Key Skills / Expertise Involved"
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
  
  export default ResearchPaperModal;
  
