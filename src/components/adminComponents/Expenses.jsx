import React from "react";
import Sidebar from "./sidebar/Sidebar";
import "../../styles/adminStyles/dashboard.css";
import DefaultHeader from "./DefaultHeader";
import { Link } from "react-router-dom";
import TableHeader from "./minorComponents/TableHeader";
import TableFooter from "./minorComponents/TableFooter";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "nepali-datepicker-reactjs/dist/index.css";
import {
  GiExpense,
  GiPayMoney
} from "react-icons/gi";

import Tippy from '@tippyjs/react';

function Expenses() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Institute Expenses" />
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
          <div className=" my-2 row mx-1">
            <div className="col-lg-6 col-xl-3 mb-4">
              <div className="card bg-primary text-white h-100">
                <div className="card-body">
                  <div className="d-flex  justify-content-between align-items-center">
                  <i class="fas fa-usd-circle" style={{fontSize:"40px"}}></i>
                    <div className="me-3">
                      <div className="text-white-75 ">Balance</div>
                      <div className="lead font-weight-bold">
                        13,50,000</div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between small">
                </div> 
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 mb-4">
              <div className="card bg-info text-white h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <GiExpense size="40" />
                         <div className="me-3">
                      <div className="text-white ">Total Expenses</div>
                      <div className="lead font-weight-bold">2,00,000</div>
                    </div>
                    
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between small">
                  
                  
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 col-xl-3 mb-4">
              <div className="card bg-danger text-white h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                  <GiPayMoney size="40" />
                    <div className="me-3">
                      <div className="text-white-75 ">Net Expenses</div>
                      <div className="lead font-weight-bold">5,00,000</div>
                    </div>
                   
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between small">
                  
                  
                </div>
              </div>
            </div>
          </div> 

          {/* Table */}
          <div className="border mx-1 p-2" >
           <b>Month </b>: <select className="pl-2">
              <option>January</option>
              <option>Feburary</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <TableHeader/>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" id="iydv26">
                    S.N.
                  </th>
                  
                  <th scope="col">Uploaded Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Expenses</th>
                  <th scope="col">Remark</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  
                  <td>03/12</td>
                  <td>Incoming</td>
                  <td>50000</td>
                  <td>Funding</td>
                  <td>
                    <i class="fas fa-edit fa-lg btn edit"></i>
                    <i class="fas fa-trash fa-lg btn delete"></i>
                    <i class="fas fa-download fa-lg btn download"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>03/12</td>
                  <td>Outgoing</td>
                  <td>10000</td>
                  <td>Maintenance</td>
                  <td>
                    <i class="fas fa-edit fa-lg edit btn"></i>
                    <i class="fas fa-trash fa-lg delete btn"></i>
                    <i class="fas fa-download fa-lg btn download"></i>
                  </td>
                </tr>
               
              </tbody>
            </table>
            <TableFooter/>
            </div>

          {/* Add new study material */}
          <div className="border mx-1 p-3 mt-3">
          <Tippy
                content={`Add new study materials for students like notes, documents, works or any other learning materials. Study material can be of all types pdfs, doc files,presentations, images etc.  These materials can be easily accessed and downloaded by students`}
              >
                <i class="fas fa-question-circle info"></i>
              </Tippy>
            <h2 className='text-center'>Add Expenses</h2>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Date*</label>
                <div className="col">
                <NepaliDatePicker inputClassName="form-control"
                              className=""
                              options={{ calenderLocale: "en", valueLocale: "en" }}
                               />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Subject*</label>
                <div className="col">
                  <input
                    type="checkbox"
                    name="profile-location"
                  />
                  <label className="ml-2">Income</label><br/>
                  <input
                    type="checkbox"
                    name="profile-location"
                  />
                  <label className="ml-2">Expense</label>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Amount </label>
                <div className="col">
                  <input
                  type="number"
                    placeholder="Amount"
                    required
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3"> Remark </label>
                <div className="col">
                  <textarea
                    placeholder="Remark"
                    required
                    name="profile-location"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info mr-5">
                  Add Expenses
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;