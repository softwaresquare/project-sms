import React, { useState } from "react";
import "../../../styles/adminStyles/dashboard.css";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

const LeaveNotice = ({ of }) => {
  return (
    <div>
      {/* TABLE SECTION */}
      <div className="border mx-1 p-2">
        <TableHeader />
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">{of} ID</th>
              <th scope="col">Absense Days</th>
              <th scope="col">Name</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Message</th>
              {
                (of == "Student" ? null : (
                  <th scope="col">Status</th>
                ))
              }

              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">11SB16</th>
              <td>04/03/2021 - 06/03/2021</td>
              <td>Nischal</td>
              <td>9809765676</td>
              <td>I have fever! </td>

              {of == "Teacher" && (
                <td className=" text-light bg-success">Approved </td>
              )}

              {of == "Staff" && (
                <td className=" text-light bg-success">Approved </td>
              )}
              <td>
              <i class="fas fa-trash fa-lg btn delete"></i>
                {
                (of == "Student" ? null : (
               <span>   <i class="fas fa-check-square fa-lg btn approve"></i>
                <i class="fas fa-times fa-lg btn delete"></i></span>
                ))
              }
              </td>
            </tr>
            <tr>
              <th scope="row">11MB19</th>
              <td>01/03/2021 - 04/03/2021</td>
              <td>Hari</td>
              <td>9809765676</td>
              <td>I have to attend uncle's marriage</td>
              {of == "Teacher" && (
                <td className="text-light bg-info">Pending </td>
              )}

              {of == "Staff" && (
                <td className="text-light bg-info">Pending </td>
              )}

              <td>
                <i class="fas fa-trash fa-lg btn delete"></i>
                {
                (of == "Student" ? null : (
               <span>   <i class="fas fa-check-square fa-lg btn approve"></i>
                <i class="fas fa-times fa-lg btn delete"></i></span>
                ))
              }
                
              </td>
            </tr>
            <tr>
              <th scope="row">11MA29</th>
              <td>01/03/2021 - 04/03/2021</td>
              <td>Shyam</td>
              <td>9809765676</td>
              <td>I have to attend sister's marriage</td>

              {of == "Teacher" && (
                <td className="text-light bg-danger">Declined </td>
              )}

              {of == "Staff" && (
                <td className="text-light bg-danger">Declined </td>
              )}

              <td>
              <i class="fas fa-trash fa-lg btn delete"></i>
                {
                (of == "Student" ? null : (
               <span>   <i class="fas fa-check-square fa-lg btn approve"></i>
                <i class="fas fa-times fa-lg btn delete"></i></span>
                ))
              }
              </td>
            </tr>
          </tbody>
        </table>
        <TableFooter />
      </div>
    </div>
  );
};

export default LeaveNotice;
