import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";
import Tippy from "@tippyjs/react";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

function Students() {
  const [bus, setBus] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value == "Bus") {
      setBus(true);
    } else {
      setBus(false);
    }
  };

  return (
    <div>
      {/* Header Section*/}
      <DefaultHeader title="Students" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
          {/* Sidebar Section */}
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
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"></main>
            </div>
          </div>
        </div>

        {/* Body Section */}

        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12 py-3">
          {/* Spacing */}
          <div style={{ height: "45px" }}></div>

          {/* Table */}

          <div className="border mx-1 p-2">
            <TableHeader />
            <table className="table table-bordered rounded">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Section</th>
                  <th scope="col">House</th>
                  <th scope="col">Parents Name</th>
                  <th scope="col">Class</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">11SB16</th>
                  <td scope="row">
                    <img src="https://source.unsplash.com/user/erondu/55x60" />
                  </td>
                  <td>Nischal Khanal</td>
                  <td>9844455445</td>
                  <td>B</td>
                  <td>Blue</td>
                  <td>Nirmala Khanal</td>
                  <td>11 Science</td>
                  <td>
                    <i class=" fas fa-edit fa-lg mx-2 edit"> </i>
                    <i class="fas fa-trash mx-2 fa-lg delete"></i>
                    <i class="fas fa-eye mx-2 fa-lg view"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">11SB16</th>
                  <td scope="row">
                    <img src="https://source.unsplash.com/user/erondu/55x60" />
                  </td>
                  <td>Nischal Khanal</td>
                  <td>9844455445</td>
                  <td>B</td>
                  <td>Red</td>
                  <td>Nirmala Khanal</td>
                  <td>11 Science</td>
                  <td>
                    <i class=" fas fa-edit fa-lg mx-2 edit"> </i>
                    <i class="fas fa-trash mx-2 fa-lg delete"></i>
                    <i class="fas fa-eye mx-2 fa-lg view"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">11SB16</th>
                  <td scope="row">
                    <img src="https://source.unsplash.com/user/erondu/55x60" />
                  </td>
                  <td>Nischal Khanal</td>
                  <td>9844455445</td>
                  <td>B</td>
                  <td>Yellow</td>
                  <td>Nirmala Khanal</td>
                  <td>11 Science</td>
                  <td>
                    <i class=" fas fa-edit fa-lg mx-2 edit"> </i>
                    <i class="fas fa-trash mx-2 fa-lg delete"></i>
                    <i class="fas fa-eye mx-2 fa-lg view"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">11SB16</th>
                  <td scope="row">
                    <img src="https://source.unsplash.com/user/erondu/55x60" />
                  </td>
                  <td>Nischal Khanal</td>
                  <td>9844455445</td>
                  <td>B</td>
                  <td>Green</td>
                  <td>Nirmala Khanal</td>
                  <td>11 Science</td>
                  <td>
                    <i class=" fas fa-edit fa-lg mx-2 edit"> </i>
                    <i class="fas fa-trash mx-2 fa-lg delete"></i>
                    <i class="fas fa-eye mx-2 fa-lg view"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <TableFooter />
          </div>

          {/* Add New Student */}
          <div className="border mx-1 mt-3 p-3">
          <Tippy content="You can add new student to the school from here by filling out the form. The new student will also be added to DB and the above table">
              <i class="fas fa-question-circle info"></i>
            </Tippy>
            <h3 className="text-center">Add New Student </h3>
            <hr />
            <form className="mt-3">
              <div className="card-body rounded border">
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
                  <label className="col-3">Gender</label>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="exampleRadios1"
                      className="form-check-label"
                    >
                      Male&nbsp; &nbsp; &nbsp;
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="exampleRadios"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="exampleRadios1"
                      className="form-check-label"
                    >
                      Female&nbsp;&nbsp;
                    </label>
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
                  <label className="col-3">Roll No.</label>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Roll No."
                      name="profile-last-name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Email Address*</label>
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      name="profile-email"
                      required
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Blood Group</label>
                  <div className="col">
                    <select className="form-control">
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O-</option>
                      <option>O+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Temporary Address</label>
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
                  <label className="col-3">Permanent Address</label>
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
                  <label className="col-3">Phone No.</label>
                  <div className="col">
                    <input
                      type="number"
                      placeholder="Enter Phone No."
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Father's Name</label>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Parent's Name"
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Mother's Name</label>
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Enter Parent's Name"
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Parent's Contact No.*</label>
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
              </div>
              <div
                className="card-body rounded border"
                style={{ marginTop: "1%" }}
              >
                <h5>Academic Details</h5>
                <hr />
                <div className="form-group row align-items-center">
                  <label className="col-3">Username*</label>
                  <div className="col">
                    <input
                      type="text"
                      required
                      placeholder="Enter Username"
                      defaultValue="username4457"
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
                      required
                      placeholder="Enter Password"
                      defaultValue="username4457"
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Class*</label>
                  <div className="col">
                    <select required className="form-control">
                      <option>None</option>
                      <option>11 Science</option>
                      <option>12 Science</option>
                      <option>11 Management</option>
                      <option>12 Management</option>
                      <option>11 Humanities</option>
                      <option>12 Humanities</option>
                      <option>Hotel Management</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Section*</label>
                  <div className="col">
                    <select required className="form-control">
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Roll No.*</label>
                  <div className="col">
                    <input
                      type="number"
                      required
                      placeholder="Enter Roll Number"
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">House*</label>
                  <div className="col">
                    <select required className="form-control">
                      <option>Red</option>
                      <option>Blue</option>
                      <option>Yellow</option>
                      <option>Green</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Shift*</label>
                  <div className="col">
                    <select required className="form-control">
                      <option>Day</option>
                      <option>Morning</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Hostel Block No.</label>
                  <div className="col">
                    <input
                      type="input"
                      required
                      placeholder="Enter Block No."
                      defaultValue="B"
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <label className="col-3">Room No.</label>
                  <div className="col">
                    <input
                      type="input"
                      required
                      placeholder="Enter Room No."
                      defaultValue={25}
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div
                className="card-body rounded border"
                style={{ marginTop: "1%" }}
              >
                <h5>Transportation</h5>
                <hr />
                <div className="form-group row align-items-center">
                  <label className="col-3">Transportation</label>
                  <div className="col">
                    <select
                      className="form-control transportation"
                      onChange={handleChange}
                    >
                      <option value="Day Scholar">Day Scholar</option>
                      <option value="Bus">Bus</option>
                    </select>
                  </div>
                </div>
                <div
                  id="bus-route"
                  className="form-group row align-items-center"
                  style={bus ? { display: "block" } : { display: "none" }}
                >
                  <label className="col-3">Other Bus Details</label>
                  <div className="col">
                    <select className="form-control">
                      <option>Choose Bus Stop</option>
                      <option>Pharping</option>
                      <option>Kirtipur</option>
                      <option>Bhaktapur</option>
                    </select>
                    <br />
                    <input
                      type="number"
                      required
                      placeholder="Enter Bus Fare"
                      name="profile-location"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row justify-content-center">
                <button type="submit" className="btn btn-info mr-5">
                  Add New Student
                </button>
                <button className="btn btn-danger">Cancel Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
