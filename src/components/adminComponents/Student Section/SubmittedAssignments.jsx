import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";

function SubmittedAssignments() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Submitted Assignments" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
          {/* Sidebar */}
          <div className="container-fluid">
            <div className="row">
              <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
              >
                <div className=" pt-3">
                  <Sidebar />
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12 py-3">
          {/* Spacing */}
          <div style={{ height: "45px" }}></div>

          {/* Table */}
          <div className="border p-2 mx-1">
            <TableHeader/>
             <table className="table table-bordered">
              <thead className="thead-dark">
                <tr id="iduxf">
                  <th scope="col" id="iydv26">
                    ID
                  </th>
                  <th scope="col" id="i4lkk">
                    Student
                  </th>
                  <th scope="col" id="iun1a">
                    Assignment Title
                  </th>
                  <th scope="col" id="i4lkk-2">
                    Subject
                  </th>
                  <th scope="col">Class</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">11S04</th>
                  <td>Ramchandra Pokhari</td>
                  <td>Project Work</td>
                  <td>Physics</td>
                  <td>11 Science</td>
                  <td>04/04/2021</td>
                  <td>
                   <i class="fas fa-eye btn view fa-lg"></i>
                    <i class="fas fa-download download btn fa-lg"></i>
                    <i class="fas fa-trash delete btn fa-lg"></i>
                    <i class="fas fa-check-square btn approve fa-lg"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">12S09</th>
                  <td>Chandralaal Narayani</td>
                  <td>Lab Report</td>
                  <td>Chemistry</td>
                  <td>12 Science</td>
                  <td>09/04/2021</td>
                  <td>
                   <i class="fas fa-eye btn view fa-lg"></i>
                    <i class="fas fa-download download btn fa-lg"></i>
                    <i class="fas fa-trash delete btn fa-lg"></i>
                    <i class="fas fa-check-square btn approve fa-lg"></i>
                  </td>
                </tr>
              </tbody>
            </table>
           <TableFooter/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmittedAssignments;
