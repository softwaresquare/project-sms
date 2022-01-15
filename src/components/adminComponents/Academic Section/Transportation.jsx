import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";

function Transportation() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Transportation" />
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
            <TableHeader />
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" id="iydv26">
                    S.N.
                  </th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col">Vehicle No.</th>
                  <th scope="col">Driver's Name</th>
                  <th scope="col">Driver's Phone No.</th>
                  <th scope="col">Description</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Bus</td>
                  <td>Ba. 5 Kha 3593</td>
                  <td>Mailo</td>
                  <td>9844755445</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>
                    <i class="fas fa-edit mx-2 fa-lg"></i>
                    <i class="fas fa-trash mx-2 fa-lg"></i>
                    <i class="fas fa-eye mx-2 fa-lg"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Sano wala Van</td>
                  <td>Na. 2 Ga 2552</td>
                  <td>Kailo</td>
                  <td>9844755445</td>
                  <td>Lorem ipsum dolor sit amet.</td>
                  <td>
                    <i class="fas fa-edit mx-2 fa-lg"></i>
                    <i class="fas fa-trash mx-2 fa-lg"></i>
                    <i class="fas fa-eye mx-2 fa-lg"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <TableFooter />
          </div>

          {/* ADD TRASNPORTATION SECTION */}
          <div className="  border mt-3 p-3 mx-1">
            <h2 className="text-center">Add Transportation</h2>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Vehicle Type*</label>
                <div className="col">
                  <select required className="form-control">
                    <option>Bus</option>
                    <option>MicroBus</option>
                    <option>MiniBus</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Driver's Name *</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Driver's Name"
                    required
                    name="driver-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Driver's Contact No. *</label>
                <div className="col">
                  <input
                    type="email"
                    placeholder="Enter Driver's Contact No."
                    required
                    name="driver-contact"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Vehicle No. *</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Vehicle No."
                    required
                    name="vehicle-no"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Transport Route*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Transport Route"
                    name="transport-route"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Transport Description</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Transport Description"
                    name="transport-description"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col" />
              <div className="form-group row">
                <div className="col" />
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info">
                  Add Transportation
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

export default Transportation;
