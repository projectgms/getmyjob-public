import React from 'react'

const ReviewSubmit = ({values}) => {
  <div className="space-y-4">
  <h3 className="text-lg font-semibold">Review Your Job Posting</h3>
  <p><strong>Title:</strong> {values.title}</p>
  <p><strong>Company:</strong> {values.company}</p>
  <p><strong>Skills:</strong> {values.skills}</p>
  <p><strong>Salary:</strong> {values.salary}</p>
  <p><strong>Email:</strong> {values.email}</p>
</div>
}

export default ReviewSubmit
