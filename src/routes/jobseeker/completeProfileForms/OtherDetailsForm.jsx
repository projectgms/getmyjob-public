import React from "react";
import { Formik, Form } from "formik";
import ReusableInputList from "./../../../components/JobSeekerComponents/ReusableComponents/ReusableInputList";
import ChipsComponent from "./../../../components/JobSeekerComponents/ReusableComponents/ChipsComponent";
import { FaSave } from "react-icons/fa";
 
function OtherDetailsForm() {
  return (

    <div className="min-h-screen bg-gray-50 p-4 md:p-8 w-full">
      <div className="mx-auto w-full">

      <Formik
        initialValues={{
          summary: "",
          expertise: [],
          achievements: [],
          awards: [],
          coCurricular: [],
          extraCurricular: [],
          personalInterests: [],
        }}
        onSubmit={(values) => {
          console.log("Form Submitted:", values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-8 rounded-lg bg-white p-6 shadow-sm">
            <div className="mx-auto w-full space-y-6">
              {/* Brief Summary */}
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Brief Summary</h3>
                <textarea
                  name="summary"
                  placeholder="Please mention a brief summary of your career objective here..."
                  className="w-full border rounded-lg p-3 h-24 resize-none"
                  value={values.summary}
                  onChange={(e) => setFieldValue("summary", e.target.value)}
                ></textarea>
                <p className="text-gray-500 text-sm text-right">
                  {values.summary.length} / 6000
                </p>
              </div>

              {/* Key Expertise */}
              <div>
                <ChipsComponent
                  label="Key Expertise"
                  placeholder="Add Expertise"
                  name="expertise"
                  form={{ values, setFieldValue }}
                />
              </div>

              {/* Achievements */}
              <ReusableInputList
                title="Achievements"
                btnText="Add Achievement"
                name="achievements"
                form={{ values, setFieldValue }}
              />

              {/* Awards and Scholarships */}
              <ReusableInputList
                title="Awards and Scholarships"
                btnText="Add awards/scholarships"
                name="awards"
                form={{ values, setFieldValue }}
              />

              {/* Co-Curricular Activities */}
              <ReusableInputList
                title="Co-Curricular Activities"
                btnText="Add activity"
                name="coCurricular"
                form={{ values, setFieldValue }}
              />

              {/* Extra Curricular Activities */}
              <ReusableInputList
                title="Extra Curricular Activities"
                btnText="Add activity"
                name="extraCurricular"
                form={{ values, setFieldValue }}
              />

              {/* Personal Interests / Hobbies */}
              <ReusableInputList
                title="Personal Interests / Hobbies"
                btnText="Add interest"
                name="personalInterests"
                form={{ values, setFieldValue }}
              />

              {/* Save Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  <FaSave />
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      </div>
    </div>
    
  );
}

export default OtherDetailsForm;
