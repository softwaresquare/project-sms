import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";

function StaffAttendence() {
  const [showBy, setShowBy] = useState("");
  const [takeAttendence, setTakeAttendence] = useState(false);
  const [viewAttendence, setViewAttendence] = useState(false);

  const [Staffs, setStaffs] = useState([]);
  useEffect(() => {
    let Staffs = [
      {
        StaffId: 1,
        StaffName: "Niraj Kafle",
        attendence: "Present",
      },
      {
        StaffId: 2,
        StaffName: "Nishant Kafle",
        attendence: "Present",
      },
      {
        StaffId: 3,
        StaffName: "Taude Singh",
        attendence: "Present",
      },
    ];

    setStaffs(
      Staffs.map((data) => {
        return {
          select: false,
          StaffId: data.StaffId,
          StaffName: data.StaffName,
          attendence: data.attendence,
        };
      })
    );
  }, []);

  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Staff's Attendence" />
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
            <h3 className="text-center">Take Attendence</h3>
            <hr />
            <div className="form-group row align-items-center">
              <label className="col-3">
                Staff ID / Name* (Write 'all' to show all)
              </label>
              <div className="col">
                <input
                  type="text"
                  required
                  placeholder="Enter Staff ID"
                  name="staffId"
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
                : "m-2 d-block border mx-1 mt-3 p-3"
            }
          >
            <h3 className="text-center">See Attendence</h3>
            <hr />

            <div className="form-group row align-items-center">
              <label className="col-3">Staff ID / Name*</label>
              <div className="col">
                <input
                  type="text"
                  required
                  placeholder="Enter Staff ID"
                  name="StaffID"
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
                      Staff ID
                    </th>
                    <th scope="col" id="ih9sp5">
                      Staff Name
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
                            setStaffs(
                              Staffs.map((d) => {
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
                  {Staffs.map((data) => (
                    <tr>
                      <td>{data.StaffId} </td>
                      <td>{data.StaffName}</td>
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
                              setStaffs(
                                Staffs.map((d) => {
                                  if (data.StaffId == d.StaffId) {
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
                  <th scope="col">Staff ID</th>
                  <th scope="col">Staff Name</th>
                  <th scope="col">Attendence</th>
                </tr>
              </thead>
              <tbody>
                {Staffs.map((data, i) => (
                  <tr>
                    <td scope="row" id={data.id}>
                      {data.StaffId}
                    </td>
                    <td>{data.StaffName}</td>
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

export default StaffAttendence;
