import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";

function AdminSettings() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Admin Settings" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
          <div className="container-fluid">
            <div className="row">
              <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
              >
                <div className="pt-3">
                  <Sidebar />
                </div>
              </nav>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"></main>
            </div>
          </div>
        </div>

        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12 py-3">
          {/* Spacing */}
          <div style={{ height: "45px" }}></div>

          {/* TABLE */}
          <div className="border mx-1 p-2" >
           <TableHeader/>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">
                    S.N.
                  </th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Ram</td>
                  <td  className='bg-danger text-light'>Super Admin</td>
                  <td >superAdmin</td>
                  <td>kafleniraj@gmail.com</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Ram</td>
                  <td className='bg-dark text-light'>Admin</td>
                  <td>superAdmin</td>
                  <td>kafleniraj@gmail.com</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Ram</td>
                  <td   className='bg-success text-light'>Receptionist</td>
                  <td>superAdmin</td>
                  <td>kafleniraj@gmail.com</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Sita</td>
                  <td className='bg-info text-light'>Accountant</td>
                  <td>superAdmin</td>
                  <td>kafleniraj@gmail.com</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <TableFooter/>
            </div>



          {/* MAKE NEW ADMIN */}
          <div className="border mt-3 p-3 mx-1" >
            <h3 className='text-center'>
           
              Add New Admin
            </h3>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Full Name*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    required
                    
                    name="profile-first-name"
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
                    required
                    name="profile-email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Role*</label>
                <div className="col">
                  <select className='form-control'>

                      <option value="">Super Admin</option>
                      <option value="">Admin</option>
                      <option value="">Receptionist</option>
                      <option value="">Accountant</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Username*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Username"
                    required
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
                    placeholder="Enter Password"
                    required
                    defaultValue="username4457"
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col" />
              <div className="form-group row align-items-center" />
              <div className="form-group row">
                <div className="col" />
              </div>
              <div className="row justify-content-center">
                <button type="submit" className="btn btn-info mr-5">
                  Add New Admin
                </button>
             
              </div>
            </form>
            <div className="container mt-2 mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
