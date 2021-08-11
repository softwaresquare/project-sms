import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";

function TeacherAttendence() {
  const [showBy, setShowBy] = useState("");
  const [takeAttendence, setTakeAttendence] = useState(false);
  const [viewAttendence, setViewAttendence] = useState(false);

  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    let teachers = [
      {
        teacherId: 1,
        teacherName: "Niraj Kafle",
        attendence: "Present",
      },
      {
        teacherId: 2,
        teacherName: "Nishant Kafle",
        attendence: "Present",
      },
      {
        teacherId: 3,
        teacherName: "Taude Singh",
        attendence: "Present",
      },
    ];

    setTeachers(
      teachers.map((data) => {
        return {
          select: false,
          teacherId: data.teacherId,
          teacherName: data.teacherName,
          attendence: data.attendence,
        };
      })
    );
  }, []);

  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Teacher's Attendence" />
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

          {/* Take Attendence Form */}
          <form
            className={
              takeAttendence
                ? "m-2 d-none"
                : viewAttendence
                ? "m-2 d-none"
                : "m-2 d-block border mx-1 p-3"
            }
          >
            <h3 className='text-center'>Take Attendence</h3>
            <hr />
            <div className="form-group row align-items-center">
              <label className="col-3">
                Teacher ID / Name* (Write 'all' to show all)
              </label>
              <div className="col">
                <input
                  type="text"
                  required
                  placeholder="Enter Teacher ID"
                  name="teacherID"
                  className="form-control"
                />
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
              <button
                type="submit"
                className="btn mr-5 btn-info"
                onClick={() => {
                  setTakeAttendence(!takeAttendence);
                }}
              >
                Take Attendence
              </button>
            </div>
          </form>

          {/* See Attendence */}
          <form
            className={
              takeAttendence
                ? "m-2 d-none"
                : viewAttendence
                ? "m-2 d-none"
                : "m-2 d-block border p-3 mx-1 mt-3"
            }
          >
            <h3 className='text-center'>See Attendence</h3>
            <hr />

            <div className="form-group row align-items-center">
              <label className="col-3">Teacher ID / Name*</label>
              <div className="col">
                <input
                  type="text"
                  required
                  placeholder="Enter Teacher ID"
                  name="teacherID"
                  className="form-control"
                />
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
            <h6 className="text-center">OR</h6>
            <div className="form-group row align-items-center">
              <label className="col-3">Month*</label>
              <div className="col">
                <input
                  type="text"
                  required
                  placeholder="Month"
                  name="profile-location"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row justify-content-center mt-4">
              <button
                type="submit"
                className="btn mr-5 btn-success"
                onClick={() => {
                  setViewAttendence(!viewAttendence);
                  setShowBy("Shown by Date");
                }}
              >
                Show By Date
              </button>
              <button
                type="submit"
                className="btn mr-5 btn-success"
                onClick={() => {
                  setViewAttendence(!viewAttendence);

                  setShowBy("Shown by Month");
                }}
              >
                Show By Month
              </button>
            </div>
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
              <h3 className=" text-center">Take Attendence :</h3>
              <hr />
              <h5>
                Date: <span>2021-04-21</span> <br />
                Day: <span>Sunday</span>
                <br />
              </h5>
              <br />
              <table className="table table-bordered mt-2">
                <thead className="thead-dark">
                  <tr id="id7scj">
                    <th scope="col" id="iydv26">
                      Teacher ID
                    </th>
                    <th scope="col" id="ih9sp5">
                      Teacher Name
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
                            setTeachers(
                              teachers.map((d) => {
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
                  {teachers.map((data) => (
                    <tr>
                      <td>{data.teacherId} </td>
                      <td>{data.teacherName}</td>
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
                              setTeachers(
                                teachers.map((d) => {
                                  if (data.teacherId == d.teacherId) {
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
                  <b>Save Attendence</b>
                </button>
              </div>
            </form>
          </div>

          {/* View Attendence */}
          <div
            className={
              takeAttendence
                ? "m-2 d-none"
                : viewAttendence
                ? "m-2 d-block p-3 border"
                : "m-2 d-none"
            }
          >
            <h3 className=" text-center">Attendance Details {showBy} :</h3>
            <hr />
            <h5>
              {showBy == "Shown by Date" ? (
                <div>
                  Date: <span>2021-04-21</span> <br />
                  Day: <span>Sunday</span>
                  <br />
                </div>
              ) : (
                <div>
                  Month: <span>Baisakh</span> <br />{" "}
                </div>
              )}
            </h5>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr id="i4pjui">
                  <th scope="col">Teacher ID</th>
                  <th scope="col">Teacher Name</th>
                  <th scope="col">Attendence</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((data, i) => (
                  <tr>
                    <td scope="row" id={data.id}>
                      {data.teacherId}
                    </td>
                    <td>{data.teacherName}</td>
                    <td>{data.attendence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherAttendence;
