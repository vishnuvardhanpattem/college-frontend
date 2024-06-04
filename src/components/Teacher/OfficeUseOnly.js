import React from 'react'

const OfficeUseOnly = () => {
    return (
        <div className='p-3' style={{border : "1.5px solid black"}}>
            <h5 className='text-center'>For Office Use Only</h5>
            <div className="mb-3">
                <label for="applicationFeePaid" className="form-label">Application Fee Paid</label>
                <select className="form-select" aria-label="Physically Handicapped" placeholder='Physically Handicapped'>
                    <option value='yes' selected>Yes</option>
                    <option value='no' >No</option>
                </select>
            </div>

            <div className='row'>
                <div className="col-md-6">
                    Student Id Generated : (example: 1234)
                </div>
                <div className="col-md-6">
                    Online Application Password : (example: 1234)
                </div>
            </div>

            <div className="mb-3">
                <label for="weatherAppliedOnline" className="form-label">Weather applied online</label>
                <select id='weatherAppliedOnline' className="form-select" aria-label="Weather applied online" placeholder='Weather applied online'>
                    <option value='yes' selected>Yes</option>
                    <option value='no' >No</option>
                </select>
            </div>
            <div className="mb-3">
                <label for="collegeOptionsEntered" className="form-label">College options Entered</label>
                <select id='collegeOptionsEntered' className="form-select" aria-label="College options Entered" placeholder='College options Entered'>
                    <option value='yes' selected>Yes</option>
                    <option value='no' >No</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">College Allotment Status: (example: Processing) </label>

            </div>
        </div>
    )
}

export default OfficeUseOnly