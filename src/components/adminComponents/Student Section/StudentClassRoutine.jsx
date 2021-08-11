import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";
import Tippy from '@tippyjs/react';

function StudentClassRoutine() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Student's Class Routine" />
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
          <div className="border mx-1 p-2" >
           <TableHeader/>
            <table className="table table-bordered">
              <tbody id="iwp4j8">
                <tr>
                  <th scope="row">1</th>
                  <td>11 Science</td>
                  <td>04/04/2021</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>
                  <i class="fas fa-edit fa-lg edit btn"></i>
                    <i class="fas fa-trash fa-lg delete btn"></i>
                    <i class="fas fa-download fa-lg download btn"></i>
                  </td>
                </tr>
                <tr id="i0vjfk">
                  <th scope="row" id="it6qrk">
                    2
                  </th>
                  <td id="iwv9ph">12 Science</td>
                  <td>09/04/2021</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>
                  <i class="fas fa-edit fa-lg edit btn"></i>
                    <i class="fas fa-trash fa-lg delete btn"></i>
                    <i class="fas fa-download fa-lg download btn"></i>
                  </td>
                </tr>
              </tbody>
              <thead className="thead-dark">
                <tr id="iduxf">
                  <th scope="col">S.N.</th>
                  <th scope="col">Class</th>
                  <th scope="col">Date Updated</th>
                  <th scope="col">Description</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
            </table>
            <TableFooter/>
            </div>
          

          {/* Add New Routine */}
          <div className="p-3 mx-1 mt-3 border">
          <Tippy
                content={`You can upload class routines of students from here. After you choose the class & section and upload the routine, the routine will be automatically sent to all  respective students and they can access the routine from the 'Class Routine' section. This routine will let students know about subjects and their periods in the week. You can generate routine by going to 'Generate Class Routine (Std.)' inside 'Academic' Section  `}
              >
                <i class="fas fa-question-circle info"></i>
              </Tippy>
            <h3 className='text-center'>Add New Routine</h3>
            <hr />
            <form className=" mt-3">
              <div className="form-group row">
                <label className="col-3">Description*</label>
                <div className="col">
                  <textarea
                    placeholder="Write in brief"
                    required
                    name="profile-bio"
                    rows={4}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3">
                  Add File/Routine* (PDF, JPG, PNG)
                </label>
                <div className="col">
                  <div className="custom-file">
                    <input
                      type="file"
                      id="validatedCustomFile"
                      required
                      className="custom-file-input"
                    />
                    <label
                      htmlFor="validatedCustomFile"
                      className="custom-file-label"
                    >
                      Choose file...
                    </label>
                    <div className="invalid-feedback">
                      Example invalid custom file feedback
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Class*</label>
                <div className="col">
                  <select className="form-control" required>
                    <option>11 Science</option>
                    <option>12 Science</option>
                    <option>11 Management</option>
                    <option>12 Management</option>
                    <option>11 Humanities</option>
                    <option>12 Humanities</option>
                    <option>HM</option>
                  </select>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info
                 mr-5">
                 Upload Routine
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentClassRoutine;
