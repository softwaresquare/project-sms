import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import "../../styles/adminStyles/dashboard.css";
import DefaultHeader from "./DefaultHeader";
import TableHeader from "./minorComponents/TableHeader";
import TableFooter from "./minorComponents/TableFooter";

function SmsMail() {
  const [toggleStudent, settoggleStudent] = useState(false);
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="SMS / Mail" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
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

        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12 py-3">
          {/* Spacing */}
          <div style={{ height: "45px" }}></div>

          {/* TABLE */}
          <div className="border p-2 mx-1">
            <TableHeader/>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" id="iydv26">
                    S.N.
                  </th>
                  <th scope="col" id="icaqo">
                    Date
                  </th>
                  <th scope="col">To</th>
                  <th scope="col">Message</th>
                  <th scope="col">Method</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td id="iwvom">Sat May 22 2021 09:45:14</td>
                  <td>11 Science A</td>
                  <td>
                    Dear students, College shall remained closed due to strike.
                    Sorry for the inconvenience caused. Caspian Valley SS
                  </td>
                  <td>SMS</td>
                  {/* <td><i class="fas fa-sms" style="font-size: 220%;"></i></td> */}
                  <td>
                    <i className="fas fa-trash fa-lg mx-2"> </i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td id="iwvom-2">Sat May 22 2021 09:45:14</td>
                  <td>11 Science A</td>
                  <td id="ixs0i">
                    Dear students, College shall remained closed due to strike.
                    Sorry for the inconvenience caused. Caspian Valley SS
                  </td>
                  {/* <td><i class="fas fa-envelope-open" style="font-size: 180%;"></i></i></td> */}
                  <td>Email</td>
                  <td id="ia6kd">
                    <i className="fas fa-trash fa-lg mx-2"> </i>
                  </td>
                </tr>
              </tbody>
            </table>
            <TableFooter/>
            </div>

          {/* SEND MAIL / SMS SECTION */}
          <div className="border p-3 mx-1 mt-3">
            <h3 className='text-center'>Send New SMS/Mail</h3>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Method*</label>
                <div className="col">
                  <select required className="form-control">
                    <option id="iiuaeg">SMS</option>
                    <option id="i6eknb">Email</option>
                    <option id="ilvtx5">Both</option>
                  </select>
                </div>
              </div>

              <div className="form-group row align-items-center">
                <label className="col-3">Recipients*</label>
                <div className="col">
                  <div className="mx-2">
                    <input
                      type="checkbox"
                      name="user"
                      id="defaultCheck12"
                      className="form-check-input "
                      onChange={() => {
                        settoggleStudent(!toggleStudent);
                      }}
                    />
                    <label htmlFor="defaultCheck1" className="form-check-label">
                      Students
                    </label>
                  </div>
                  <div className="mx-2">
                    <input
                      type="checkbox"
                      name="user"
                      id="defaultCheck1"
                      className="form-check-input"
                    />
                    <label htmlFor="defaultCheck1" className="form-check-label">
                      Teachers
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row align-items-center">
                <label className="col-3">Message*</label>
                <div className="col">
                  <textarea
                    placeholder="Enter the message"
                    rows={3}
                    className="form-control"
                  />
                </div>
              </div>

              {/* SELECT STUDENTS */}
              <div
                className={
                  toggleStudent
                    ? "form-group border p-2 d-block "
                    : "form-group border p-2 d-none "
                }
              >
                
                <div className="col">
                  <div>
                    <label className="col-3">Class:</label>
                    <select multiple className="form-control">
                      <option>11 Science</option>
                      <option>12 Science</option>
                      <option>11 Management</option>
                      <option>12 Management</option>
                      <option>11 Humanities</option>
                      <option>12 Humanities</option>
                      <option>HM</option>
                    </select>
                    <label className="col-3">Section:</label>
                    <select multiple className="form-control">
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </div>
                </div>
              </div>



              {/* SEND BUTTON */}
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn mr-5 btn-info">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmsMail;
