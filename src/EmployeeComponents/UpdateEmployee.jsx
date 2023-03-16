import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateEmployee = () => {
    const [employeeDetails, setEmployeeDetails] = useState({
        name: "",
        email: "",
        company: "",
        postion: "",
        mobileNumber: ""
    }); 
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const id = params.id.toString();
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/get-single-employees/${id}`).then(response => {
            setEmployeeDetails(response.data[0]);
            console.log(response)
        }).catch(err => {
            console.log('Error: ', err);
        })
    }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = params.id.toString();
        const newEmployee = {...employeeDetails};
        try{
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/update-employee/${id}`, newEmployee);
            if(response){
                setEmployeeDetails({
                    name: "",
                    email: "",
                    company: "",
                    position: "",
                    mobileNumber: ""
                });
                navigate('/employee/list');
            }
        }catch(err){
            console.log('Error: ', err);
        }
    };

    const handleForm = (value) => {
        return setEmployeeDetails(employee => {
            return {...employee, ...value}
        })
    }


    return (
        <div className="formSteps">
            <h3>Update an Employee</h3>
           <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input className="form-control" id="name" type="text" value={employeeDetails.name} onChange={e => handleForm({name: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="level">Company:</label>
                    <input className="form-control" id="company" type="text" value={employeeDetails.company} onChange={e => handleForm({company: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="level">Position:</label>
                    <input className="form-control" id="position" type="text" value={employeeDetails.position} onChange={e => handleForm({position: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" id="email" type="text" value={employeeDetails.email} onChange={e => handleForm({email: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input className="form-control" id="mobileNumber" type="text" value={employeeDetails.mobileNumber} onChange={e => handleForm({mobileNumber: e.target.value})} />
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Employee"
                        className="btn btn-primary"
                    />
                    </div>
           </form>
        </div>
    )
}

export default UpdateEmployee;