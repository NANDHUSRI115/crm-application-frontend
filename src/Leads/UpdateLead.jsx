import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateLead = () => {
    const [employeeDetails, setEmployeeDetails] = useState({
        name: "",
        email: "",
        queryType: "",
        query: ""
    });
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const id = params.id.toString();
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/get-single-lead/${id}`).then(response => {
            setEmployeeDetails(response.data[0]);
            console.log(response)
        }).catch(err => {
            console.log('Error: ', err);
        })
    }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = params.id.toString();
        const newEmployee = { ...employeeDetails };
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/update-lead/${id}`, newEmployee);
            if (response) {
                setEmployeeDetails({
                    name: "",
                    email: "",
                    queryType: "",
                    query: ""
                });
                navigate('/lead/list');
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
            <h3>Update Lead</h3>
            <form  style={{width:"20rem"}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" type="text" value={employeeDetails.name} onChange={e => handleForm({ name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" id="email" type="text" value={employeeDetails.email} onChange={e => handleForm({ email: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="level">QueryType</label>
                    <input className="form-control" id="queryType" type="text" value={employeeDetails.queryType} onChange={e => handleForm({ queryType: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="level">Query</label>
                    <input className="form-control" id="query" type="text" value={employeeDetails.query} onChange={e => handleForm({ query: e.target.value })} />
                </div>
              
                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Lead"
                        className="btn btn-primary"
                        style={{width:"20rem"}}
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateLead;