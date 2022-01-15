import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

function Staffs() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Staffs" />
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

          {/* TABLE */}
          <div className="border mx-1 p-2">
            <TableHeader/>
            <table className="table table-bordered ">
              <thead className="thead-dark ">
                <tr>
                  <th scope="col" id="iydv26">
                    Staff ID
                  </th>
                  <th scope="col">Photo</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Role</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">14546P</th>
                  <td>
                    <img src="https://source.unsplash.com/user/erondu/50x50" />
                  </td>
                  <td>Resham Khanal</td>
                  <td>Male</td>
                  <td>9861554466</td>
                  <td > Driver </td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                    <i class="fas fa-eye fa-lg mx-2"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">14746U</th>
                  <td>
                    <img src="https://source.unsplash.com/user/erondu/50x50" />
                  </td>
                  <td>Suresh Thapa</td>
                  <td>Male</td>
                  <td>9871554466</td>
                  <td>Cook </td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                    <i class="fas fa-eye fa-lg mx-2"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <TableFooter/>
            </div>

          {/* ADD STAFF SECTION */}
          <div className="border p-3 mx-1 mt-3">
            <h2 className='text-center'>
            
              Add New Staff
            </h2>

            <form className="mt-3">
              <div className="card-body border rounded">
                <h5>Basic Details</h5>
                <hr />
                <div className="form-group row align-items-center">
                  <label className="col-3">Full Name*</label>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      name="profile-first-name"
                      required
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Gender*</label>
                  <div className="form-check mx-2">
                    <input
                      type="radio"
                      name="exampleRadios1"
                      id="exampleRadios1"
                      required
                      defaultValue="option1"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="exampleRadios1"
                      className="form-check-label"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      type="radio"
                      name="exampleRadios1"
                      defaultValue="option1"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="exampleRadios1"
                      className="form-check-label"
                    >
                      Female
                    </label>
                  </div>
                  <div className="col" />
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Marital Status</label>
                  <div className="form-check mx-2">
                    <input
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios1"
                      defaultValue="option1"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="exampleRadios1"
                      className="form-check-label"
                    >
                      Married
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      type="radio"
                      name="exampleRadios2"
                      defaultValue="option1"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="exampleRadios1"
                      className="form-check-label"
                    >
                      Unmarried
                    </label>
                  </div>
                  <div className="col" />
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Email Address</label>
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      name="profile-email"
                      
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Address</label>

                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Address"
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Date of Birth</label>
                  <div className="col">
                  <NepaliDatePicker inputClassName="form-control"
                              className=""
                              
                               />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Phone No.*</label>
                  <div className="col">
                    <input
                      type="number"
                      placeholder="Enter Phone No."
                      required
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-3">Photo</label>
                  <div className="col">
                    <div className="custom-file">
                      <input
                        type="file"
                        id="validatedCustomFile"
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
              </div>
              <div
                className="card-body border rounded"
                style={{ marginTop: "1%" }}
              >
                <h5>Academic Details</h5>
                <hr />
                <div className="form-group row align-items-center">
                  <label className="col-3">Staff ID No.*</label>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Staff's ID No.."
                      defaultValue="41415T"
                      required
                      name="profile-last-name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Username*</label>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Username"
                      defaultValue="username6657"
                      required
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Password*</label>
                  <div className="col">
                    <input
                      type="input"
                      placeholder="Enter Password"
                      defaultValue="12345#"
                      required
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Role*</label>
                  <div className="col">
                    <input
                      type="input"
                      placeholder="Enter your Role"
                      required
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Work Hours*</label>
                  <div className="form-check mx-2">
                    <input
                      type="radio"
                      name="exampleRadios3"
                      id="exampleRadios1"
                      required
                      defaultValue="option1"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="exampleRadios1"
                      className="form-check-label"
                    >
                      Full-Time
                    </label>
                  </div>
                  <div className="form-check mx-2">
                    <input
                      type="radio"
                      name="exampleRadios3"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="exampleRadios1"
                      className="form-check-label"
                    >
                      Part-Time{" "}
                    </label>
                  </div>
                </div>
                
                
              </div>
              <div
                className="card-body rounded border"
                style={{ marginTop: "1%" }}
              >
                <h5>Financial Details</h5>
                <hr />
                <div className="form-group row align-items-center">
                  <label className="col-3">Salary</label>
                  <div className="col">
                    <input
                      type="number"
                      placeholder="Enter Salary"
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Bank Name</label>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Bank Name"
                    
                      name="profile-first-name"
                      
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Name in Bank Account</label>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Bank Account Number</label>
                  <div className="col">
                    <input
                      type="number"
                      placeholder="Enter Account No."
                      
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <hr />
                <div className="form-group row align-items-center">
                  <label className="col-3">Esewa ID</label>
                  <div className="col">
                    <input
                      type="number"
                      placeholder="Enter your Esewa ID"
                      
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">IME Pay ID</label>
                  <div className="col">
                    <input
                      type="number"
                      placeholder="Enter your IME Pay ID"
                      
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn mr-5 btn-info">
                  Add New Staff
                </button>
                <a href="#" className="btn btn-danger">
                  Cancel Add
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staffs;
