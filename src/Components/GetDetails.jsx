import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "../app.css";

const MyCreations = () => {
  let [state, setState] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let fetchdata = () => {
      try {
        let getdata = JSON.parse(localStorage.getItem("Details"));
        setState(getdata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  console.log(state);

  let handleDelete = () => {
    localStorage.removeItem("Details");
    navigate("/");
  };

  return (
    <section id="userPHomeBlock">
      <table id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Expected CTC</th>
            <th>Job Apply</th>
            <th>Skills</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Gender}</td>
              <td>{item.MobileNumber}</td>
              <td>{item.ExpectedCTC}</td>
              <td>{item.JobApply}</td>
              <td>{item.technicalSkills}</td>
              <td>
                <Link to="/edit-details" id="pointer">
                  Edit
                </Link>
              </td>
              <td onClick={handleDelete} id="pointer">
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/"  id="create">
        create
      </Link>
    </section>
  );
};

export default MyCreations;
