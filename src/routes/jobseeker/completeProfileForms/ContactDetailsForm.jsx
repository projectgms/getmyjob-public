import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import InputField from "./../../../components/JobSeekerComponents/InputField";
import DropDown from "./../../../components/JobSeekerComponents/DropDown";
import TextAreaField from "./../../../components/JobSeekerComponents/TextAreaField";
import WebLinksField from "./../../../components/JobSeekerComponents/WebLinksField";
import { FaSave } from 'react-icons/fa';

const validationSchema = Yup.object({
  secondaryPhone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  primaryEmail: Yup.string()
    .email("Invalid email address")
    .required("Primary email is required"),
  otherEmail: Yup.string().email("Invalid email address"),
  webLinks: Yup.array()
    .of(
      Yup.object().shape({
        type: Yup.string().required("Platform is required"),
        url: Yup.string().url("Invalid URL").required("URL is required"),
      })
    )
    .min(1, "At least one web link is required"),
  currentAddress: Yup.string().required("Current address is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  zipCode: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .required("ZIP code is required"),
  permanentAddress: Yup.string().required("Permanent address is required"),
});

const initialValues = {
  secondaryPhone: "",
  primaryEmail: "",
  otherEmail: "",
  webLinks: [{ type: "", url: "" }], // Start with an empty link
  currentAddress: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
  permanentAddress: "",
};

function ContactDetailsForm() {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="space-y-8 rounded-lg bg-white p-6 shadow-sm">
              <InputField label="Secondary Phone Number" name="secondaryPhone" />
              <InputField label="Primary Email" name="primaryEmail" type="email" />
              <InputField label="Other Email" name="otherEmail" type="email" />

              {/* Web Links Field */}
              <WebLinksField name="webLinks" setFieldValue={setFieldValue} />

          

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  <FaSave />
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactDetailsForm;
