import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";
import Tippy from '@tippyjs/react';

function StudyMaterials() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Study Materials" />
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
              <thead className="thead-dark">
                <tr>
                  <th scope="col" id="iydv26">
                    S.N.
                  </th>
                  <th scope="col">Title</th>
                  <th scope="col">Uploaded Date</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Class</th>
                  <th scope="col">Section</th>
                  <th scope="col">Uploaded By</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Newton's Laws of Motion</td>
                  <td>03/12</td>
                  <td>Science</td>
                  <td>11 Science</td>
                  <td>A</td>
                  <td>Bijay Shahi</td>
                  <td>
                    <i class="fas fa-edit fa-lg btn edit"></i>
                    <i class="fas fa-trash fa-lg btn delete"></i>
                    <i class="fas fa-download fa-lg btn download"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Newton's Laws of Motion</td>
                  <td>03/12</td>
                  <td>Science</td>
                  <td>11 Science</td>
                  <td>A</td>
                  <td>Bijay Shahi</td>
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
            <h2 className='text-center'>Add New Study Material</h2>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Title*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Title"
                    name="profile-first-name"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Subject*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    required
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Class*</label>
                <div className="col">
                  <select required className="form-control">
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
              <div className="form-group row align-items-center">
                <label className="col-3">Section*</label>
                <div className="col">
                  <select required multiple className="form-control">
                    <option id="iiuaeg">A</option>
                    <option id="i6eknb">B</option>
                    <option id="ilvtx5">C</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3">File*</label>
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
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info mr-5">
                  Add New Material
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyMaterials;
