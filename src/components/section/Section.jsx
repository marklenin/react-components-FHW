import React from "react";
import "./Section.css";

function Section({ users }) {
  users.map((a) => {
    console.log(a);
  });
  return (
    <>
      <table id="customers">
        <thead>
          <tr>
            <td>#</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {users.map((elem, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{elem.name}</td>
              <td>{elem.lastName}</td>
              <td>{elem.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Section;
