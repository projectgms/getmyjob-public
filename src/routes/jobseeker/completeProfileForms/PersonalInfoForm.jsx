import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaSave } from "react-icons/fa";

import InputField from './../../../components/JobSeekerComponents/InputField';
import DropDown from './../../../components/JobSeekerComponents/DropDown';
import FileUploadField from './../../../components/JobSeekerComponents/FileUploadField';
import TextAreaField from './../../../components/JobSeekerComponents/TextAreaField';
import MultiSelectField from './../../../components/JobSeekerComponents/MultiSelectField';


// Validation Schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string(),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Phone number is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  maritalStatus: Yup.string(),
  addressLine1: Yup.string().required("Address is required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  zipCode: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .required("ZIP code is required"),
  course: Yup.string().required("Course is required"),
  specialization: Yup.string().required("Primary specialization is required"),
  bloodGroup: Yup.string(),
  medicalHistory: Yup.string(),
  disability: Yup.string(),
  knownLanguages: Yup.array().min(1, "Select at least one language"),
  dreamCompany: Yup.string(),
});

// Initial Values
const initialValues = {
  profilePicture: null,
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
  course: "",
  specialization: "",
  bloodGroup: "",
  medicalHistory: "",
  disability: "",
  knownLanguages: [],
  dreamCompany: "",
};

function PersonalInfoForm() {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full p-8">
      <div className="mx-auto w-full">

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-8 rounded-lg bg-white p-6 shadow-sm">
              
              {/* Profile Picture Upload */}
              <FileUploadField
                label="Profile Picture"
                name="profilePicture"
                setFieldValue={setFieldValue}
              />

              {/* Personal Information */}
              <div className="grid gap-6 md:grid-cols-3">
                <InputField label="First Name" name="firstName" />
                <InputField label="Middle Name" name="middleName" />
                <InputField label="Last Name" name="lastName" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Email Address" name="email" type="email" />
                <InputField label="Phone Number" name="phoneNumber" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Date of Birth" name="dateOfBirth" type="date" />
                <DropDown
                  label="Gender"
                  name="gender"
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                    { label: "Other", value: "other" },
                  ]}
                />
                <DropDown
                  label="Marital Status"
                  name="maritalStatus"
                  options={[
                    { label: "Single", value: "single" },
                    { label: "Married", value: "married" },
                    { label: "Divorced", value: "divorced" },
                  ]}
                />
              </div>

              {/* Address Section */}
              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Address Line 1" name="addressLine1" />
                <InputField label="Address Line 2" name="addressLine2" />
                <DropDown
                  label="Country"
                  name="country"
                  options={[
                    { label: "India", value: "IN" },
                    { label: "United States", value: "US" },
                    { label: "United Kingdom", value: "UK" },
                  ]}
                />
                <InputField label="State/Province" name="state" />
                <InputField label="City" name="city" />
                <InputField label="ZIP/Postal Code" name="zipCode" />
               
              </div>

              {/* Education & Specialization */}
              <div className="grid gap-6 md:grid-cols-2">
                <InputField label="Course" name="course" />
                <InputField label="Primary Specialization" name="specialization" />
              </div>

              {/* Additional Information */}
              <div className="grid gap-6 md:grid-cols-2">
                <DropDown
                  label="Blood Group"
                  name="bloodGroup"
                  options={[
                    { label: "A+", value: "A+" },
                    { label: "B+", value: "B+" },
                    { label: "O+", value: "O+" },
                  ]}
                />
                <DropDown
                  label="Disability"
                  name="disability"
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </div>

              {/* Multi-Select */}
              <MultiSelectField
                label="Known Languages"
                name="knownLanguages"
                options={[
                  { label: "English", value: "english" },
                  { label: "Hindi", value: "hindi" },
                  { label: "Spanish", value: "spanish" },
                ]}
              />

              {/* Text Area */}
              <TextAreaField label="Medical History" name="medicalHistory" />
              <InputField label="Dream Company" name="dreamCompany" />

              {/* Submit Button */}
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

export default PersonalInfoForm;
