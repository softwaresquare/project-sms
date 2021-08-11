import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";

function NewsBoard() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="News Board" />
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

          {/* TABLE SECTION */}
          <div className="border mx-1 p-2">
            <TableHeader/>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr id="ivo36h">
                  <th scope="col">S.N.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Published Date</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Holiday</td>
                  <td>
                    Dear Students, College will remain closed on 22/04/2021 due
                    to strike. Sorry for the inconvenience ....
                  </td>
                  <td>08/04/2021</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                    <i class="fas fa-download fa-lg mx-2"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Exam</td>
                  <td>
                    Dear Students, Your Second Terminal Examination from Jestha
                    12, Sunday. Every students are .....
                  </td>
                  <td>08/04/2021</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                    <i class="fas fa-download fa-lg mx-2"></i>
                  </td>
                </tr>
              </tbody>
            </table>

            <TableFooter/>
              </div>


          {/* SEND NOTICE */}
          <div className="mx-1 p-3 border mt-3">
            <h3 className='text-center'>Send Notice </h3>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Notice Title*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Notice Title"
                    required
                    
                    name="profile-first-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Notice Description*</label>
                <div className="col">
                  <textarea
                    rows={3}
                    required
                    placeholder="Notice Description"
                    className="form-control"
                
                  />
                </div>
              </div>
              <div className="col" />
              <div className="form-group row">
                <div className="col" />
              </div>
              <div className="form-group row">
                <label className="col-3">Add File / Image</label>
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
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info mr-5">
                   Publish Notice
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBoard;
