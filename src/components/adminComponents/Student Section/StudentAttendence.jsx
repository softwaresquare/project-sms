import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import { Button, Modal } from "react-bootstrap";
import Tippy from "@tippyjs/react";

function StudentAttendence() {
  

  //States
  const [showEditAttendence, setShowEditAttendence] = useState(false);
  const [takeAttendence, setTakeAttendence] = useState(false);
  const [viewAttendence, setViewAttendence] = useState(false);
  const [students, setStudents] = useState([]);

  const handleCloseEditAttendence = () => setShowEditAttendence(false);
  const handleShowEditAttendence = () => setShowEditAttendence(true);

  useEffect(() => {
    let students = [
      {
        rollNo: 1,
        stdName: "Niraj Kafle",
        attendence: "Present",
      },
      {
        rollNo: 2,
        stdName: "Nishant Kafle",
        attendence: "Present",
      },
      {
        rollNo: 3,
        stdName: "Taude Singh",
        attendence: "Absent",
      },
    ];

    setStudents(
      students.map((data) => {
        return {
          select: false,
          rollNo: data.rollNo,
          stdName: data.stdName,
          attendence: data.attendence,
        };
      })
    );
  }, []);

  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Student's Attendence" />
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

          {/* Check / Take Attendence Form */}

          <form
            className={
              takeAttendence
                ? "m-2 d-none"
                : viewAttendence
                ? "m-2 d-none"
                : "m-2 d-block border mx-1 p-3"
            }
          >
            <div className="form-group row align-items-center">
              <label className="col-3">Class*</label>
              <div className="col">
                <select required className="form-control">
                  <option>11 Science</option>
                  <option>12 Science</option>
                  <option id="iap76a">11 Management</option>
                  <option>12 Management</option>
                  <option>11 Humanities</option>
                  <option>12 Humanities</option>
                  <option id="iqi76p">HM</option>
                </select>
              </div>
            </div>
            <div className="form-group row align-items-center">
              <label className="col-3">Section*</label>
              <div className="col">
                <select required className="form-control">
                  <option>A</option>
                  <option>B</option>
                </select>
              </div>
            </div>
            <div className="form-group row align-items-center">
              <label className="col-3">Date*</label>
              <div className="col">
                <input
                  type="date"
                  required
                  placeholder="Date"
                  name="profile-location"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col" />
            <div className="form-group row">
              <div className="col" />
            </div>
            <div className="row justify-content-center mt-4">
              <Tippy content={`Take the attendence of above selected students`}>
                <button
                  type="submit"
                  className="btn mr-5 btn-info"
                  onClick={() => {
                    setTakeAttendence(!takeAttendence);
                  }}
                >
                  Take Attendence
                </button>
              </Tippy>
              <Tippy
                content={`See the attendence record of above selected students`}
              >
                <button
                  type="submit"
                  className="btn mr-5 btn-dark"
                  onClick={() => {
                    setViewAttendence(!viewAttendence);
                  }}
                >
                  See Attendence
                </button>
              </Tippy>
            </div>
            <Tippy
              content={`You can take attendence of students and also see the attendence of previous days of all students. Fill out the above details and choose 'Take Attendence' to take attendence of the student/s and choose 'See Attendence' to see attendence of the student/s `}
            >
              <i class="fas fa-question-circle info"></i>
            </Tippy>
          </form>

          {/* Take attendence Section */}
          <div
            className={
              takeAttendence
                ? "m-2 d-block"
                : viewAttendence
                ? "m-2 d-none"
                : "m-2 d-none"
            }
          >
            <form className="border p-3">
              <Tippy content={`Go Back`}>
                <i
                  class="fas fa-chevron-left info fa-2x btn"
                  onClick={() => {
                    window.location.reload();
                  }}
                ></i>
              </Tippy>
              <h3 className=" text-center">Take Attendence :</h3>
              <hr />
              <h5>
                Date: <span>2021-04-21</span> <br />
                Day: <span>Sunday</span>
                <br />
                Class: <span>11 Science</span> <br />
                Section: <span>A</span>
              </h5>
              <br />
              <table className="table table-bordered mt-2">
                <thead className="thead-dark">
                  <tr id="id7scj">
                    <th scope="col" id="iydv26">
                      Roll No.
                    </th>
                    <th scope="col" id="ih9sp5">
                      Student Name
                    </th>
                    <th scope="col" id="idrppl">
                      Attendence
                      <div className="form-check">
                        <input
                          type="checkbox"
                          defaultValue
                          id="defaultCheck1"
                          className="form-check-input"
                          onChange={(e) => {
                            let checked = e.target.checked;
                            setStudents(
                              students.map((d) => {
                                d.select = checked;
                                return d;
                              })
                            );
                          }}
                        />
                        <label
                          htmlFor="defaultCheck1"
                          className="form-check-label"
                        >
                          All Present
                        </label>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((data) => (
                    <tr>
                      <td>{data.rollNo} </td>
                      <td>{data.stdName}</td>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            defaultValue
                            id="defaultCheck1-2"
                            className="form-check-input1"
                            checked={data.select}
                            onChange={(e) => {
                              let checked = e.target.checked;
                              setStudents(
                                students.map((d) => {
                                  if (data.rollNo == d.rollNo) {
                                    d.select = checked;
                                  }
                                  return d;
                                })
                              );
                            }}
                          />

                          <label
                            htmlFor="defaultCheck1"
                            className="form-check-label mx-2"
                          >
                            {data.attendence}
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row justify-content-center mt-4">
                <button
                  value="submit"
                  type="submit"
                  className="btn mr-5 btn-success"
                >
                  Save Attendence
                </button>
              </div>
            </form>
          </div>

          {/* See Attendence */}
          <div
            className={
              takeAttendence
                ? "d-none"
                : viewAttendence
                ? "m-1 d-block p-3 border"
                : " d-none"
            }
          >
            <Tippy content={`Go Back`}>
              <i
                class="fas fa-chevron-left info fa-2x btn"
                onClick={() => {
                  window.location.reload();
                }}
              ></i>
            </Tippy>
            <h3 className=" text-center">Attendance Details :</h3>
            <hr />
            <h5>
              Date: <span>2021-04-21</span> <br />
              Day: <span>Sunday</span>
              <br />
              Class: <span>11 Science</span> <br />
              Section: <span>A</span>
            </h5>
              <br />






            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr id="i4pjui">
                  <th scope="col">Roll No.</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Attendence</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {students.map((data, i) => (
                  <tr>
                    <td scope="row" id={data.id}>
                      {data.rollNo}
                    </td>
                    <td>{data.stdName}</td>
                    <td
                      className={
                        data.attendence == "Present"
                          ? "bg-success text-light"
                          : "bg-danger text-light"
                      }
                    >
                      {data.attendence}
                    </td>
                    <td>
                      {" "}
                      <i
                        class=" fas fa-edit fa-lg btn edit"
                        onClick={handleShowEditAttendence}
                      >
                        {" "}
                      </i>
                      <i class="fas fa-trash btn fa-lg delete"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         
          </div>

          {/* Make Edit Attendence Modal */}
          <Modal show={showEditAttendence} onHide={handleCloseEditAttendence}>
            <Modal.Header>
              <Modal.Title>Edit Attendence</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* EDIT ATTENDENCE */}

              <div className=" mx-1 p-3">
                <form action="">
                  <div className="form-group row align-items-center">
                    <label className="col-3">Name*</label>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        defaultValue="Niraj Kafle"
                      />
                    </div>
                  </div>

                  <div className="form-group row align-items-center">
                    <label className="col-3">Attendence*</label>
                    <div className="col">
                      <select required className="form-control">
                        <option>Present</option>
                        <option>Absent</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleCloseEditAttendence}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleCloseEditAttendence}>
                Save Edit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default StudentAttendence;
