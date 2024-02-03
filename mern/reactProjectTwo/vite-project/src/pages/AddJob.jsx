import axios from 'axios'
import React from 'react'
import postApiService from '../services/postApiService'

const AddJob = () => {
  const handleAddJob = async () => {
    // const response = await axios.post('add-job-endpoint', {"a":"b"})
    const response = await postApiService('/add-job-endpoint, formData')

  }
  return (
    <>
      <div>AddJob</div>
      {/* input fields = 8 */}
      {/* endpoint add-job */}
    </>
  )
}

export default AddJob