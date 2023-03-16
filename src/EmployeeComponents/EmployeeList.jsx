import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/get-all-employee`)
        .then(response => {
            setEmployees(response.data)
        }).catch(err => {
            console.log('Error:', err)
        })
    };

    const deleteEmployee = (employeeId) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/api/delete-employee/${employeeId}`).then(response => {
            if (response) {
                getEmployees();
            }
        }).catch(err => {
            console.log('Err: ', err);
        })
    };


    return (
        <div>
            <h3>Customer List : </h3>
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
                        <th>Company</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{employee.company}</td>
                                <td>{employee.position}</td>
                                <td>{employee.email}</td>
                                <td>{employee.mobileNumber}</td>
                                <td>
                                    <Link className="btn btn-link" to={`/employee/update/${employee._id}`}>Edit</Link>
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

export default EmployeeList;