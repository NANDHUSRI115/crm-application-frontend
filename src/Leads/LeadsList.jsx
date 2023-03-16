import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const LeadsList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/get-all-leads`).then(response => {
            setEmployees(response.data)
        }).catch(err => {
            console.log('Error:', err)
        })
    };

    const deleteEmployee = (employeeId) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/api/delete-lead/${employeeId}`).then(response => {
            if (response) {
                getEmployees();
            }
        }).catch(err => {
            console.log('Err: ', err);
        })
    };


    return (
        <div>
            <h3>Request List : </h3>
            <div className="text-center">
                <NavLink to={"/employee/navbar"}>
                    <button className="btn btn-primary">Back to Home Page</button>
                </NavLink>
            </div>
            <br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>QueryType</th>
                        <th>Query</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.queryType}</td>
                                <td>{employee.query}</td>
                                <td>
                                    <Link className="btn btn-link" to={`/update/lead/${employee._id}`}>Edit</Link>
                                    <button className="btn btn-link" onClick={() => deleteEmployee(employee._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default LeadsList;