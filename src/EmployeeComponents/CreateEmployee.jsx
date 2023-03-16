import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEmployee = () => {
    const [employeeDetails, setEmployeeDetails] = useState({
        name: "",
        email: "",
        company: "",
        position: "",
        mobileNumber: ""
    });

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEmployee = { ...employeeDetails };
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/create-employee`, newEmployee);
    
            if (response) {
                setEmployeeDetails({
                    name: "",
                    email: "",
                    company: "",
                    position: "",
                    mobileNumber: ""
                });
                navigate('/employee/list');
            }
        } catch (err) {
            console.log('Error: ', err);
        }
    };

    const handleForm = (value) => {
        return setEmployeeDetails(employee => {
            return { ...employee, ...value }
        })
    }


    return (
        <div className="formSteps">
            <h3>Create an Employee</h3>
            <form style={{ width: "20rem" }} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" type="text" value={employeeDetails.name} onChange={e => handleForm({ name: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label htmlFor="level">Company</label>
                    <input className="form-control" id="company" type="text" value={employeeDetails.company} onChange={e => handleForm({ company: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label htmlFor="level">Position</label>
                    <input className="form-control" id="position" type="text" value={employeeDetails.position} onChange={e => handleForm({ position: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" id="email" type="text" value={employeeDetails.email} onChange={e => handleForm({ email: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input className="form-control" id="mobileNumber" type="text" value={employeeDetails.mobileNumber} onChange={e => handleForm({ mobileNumber: e.target.value })} required />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create an Employee"
                        className="btn btn-primary"
                        style={{ width: "20rem" }}
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateEmployee;