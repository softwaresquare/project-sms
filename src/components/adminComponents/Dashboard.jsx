import React from "react";
import Sidebar from "./sidebar/Sidebar";
import "../../styles/adminStyles/dashboard.css";
import DefaultHeader from "./DefaultHeader";
import { Line, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

function Dashboard() {
  //Chart Details
  const attendenceData = {
    labels: ["Sun", "Mon", "Tue", "Thurs", "Fri"],

    datasets: [
      {
        label: "Teachers",
        data: [90, 110, 90, 100, 80, 75],
        backgroundColor: "rgb(54, 162, 235,0.6)",
        borderColor: "rgb(54, 162, 235)",
        fill: true,
      },
      {
        label: "Students",
        data: [350, 500, 400, 38, 370, 320],
        backgroundColor: "rgb(255, 99, 132, 0.6)",
        borderColor: "rgb(255, 99, 132)",
        fill: true,
      },
    ],
  };

  const studentsData = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        label: "# of Votes",
        data: [130, 100],
        backgroundColor: ["rgb(52, 152, 219)", "rgb(231, 76, 60)"],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <DefaultHeader title="Dashboard" />
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
            </div>
          </div>
        </div>

        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12 py-3">
          {/* SPACING */}
          <div style={{ height: "35px" }}></div>

          {/* CARDS SECTION */}
          <div className=" my-2 row mx-1">
            <div className="col-lg-6 col-xl-3 mb-4">
              <div className="card bg-primary text-white h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="me-3">
                      <div className="text-white-75 ">Students</div>
                      <div className="lead font-weight-bold">13,500</div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler-xl  icon-tabler-school"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                    </svg>
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between small">
                  <Link
                    to="/students"
                    id="ibx1b"
                    className="text-white stretched-link"
                  >
                    View Students
                  </Link>
                  <div className="text-white">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      data-fa-i2svg
                      className="svg-inline--fa fa-angle-right fa-w-8"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 mb-4">
              <div className="card bg-info text-white h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="me-3">
                      <div className="text-white ">Teachers</div>
                      <div className="lead font-weight-bold">223</div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-man"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx={12} cy={5} r={2} />
                      <path d="M10 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                    </svg>
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between small">
                  <Link to="/teachers" className="text-white stretched-link">
                    View Teachers
                  </Link>
                  <div className="text-white">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      data-fa-i2svg
                      className="svg-inline--fa fa-angle-right fa-w-8"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 mb-4">
              <div className="card bg-success text-white h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="me-3">
                      <div className="text-white-75 ">Staffs</div>
                      <div className="lead font-weight-bold">24</div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-users"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between small">
                  <Link to="/staffs" className="text-white stretched-link">
                    View Staffs
                  </Link>
                  <div className="text-white">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      data-fa-i2svg
                      className="svg-inline--fa fa-angle-right fa-w-8"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 mb-4">
              <div className="card bg-danger text-white h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="me-3">
                      <div className="text-white-75 ">Teachers on Leave</div>
                      <div className="lead font-weight-bold">5</div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-calendar-off"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.823 19.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.175 -1.823m3.825 -.177h9a2 2 0 0 1 2 2v9" />
                      <line x1={16} y1={3} x2={16} y2={7} />
                      <line x1={8} y1={3} x2={8} y2={4} />
                      <path d="M4 11h7m4 0h5" />
                      <line x1={11} y1={15} x2={12} y2={15} />
                      <line x1={12} y1={15} x2={12} y2={18} />
                      <line x1={3} y1={3} x2={21} y2={21} />
                    </svg>
                  </div>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between small">
                  <Link
                    to="/teachers/teacher-attendence"
                    className="text-white stretched-link"
                  >
                    View Attendence
                  </Link>
                  <div className="text-white">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      data-fa-i2svg
                      className="svg-inline--fa fa-angle-right fa-w-8"
                    >
                      <path
                        fill="currentColor"
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                      ></path>
                    </svg>
                    {/* <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* CHART SECTION */}

          <div className="chart-title">
            <h3>Attendence </h3>
            <h3>Students </h3>
          </div>

          <div class="row mx-2">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3 border">
              <Line data={attendenceData} />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3 border">
              <Doughnut
                options={{ maintainAspectRatio: false }}
                width={"50%"}
                data={studentsData}
              />
            </div>
          </div>

          {/* CARDS SECTION */}

          <div className="row mx-2 my-3 border ">
            {/* INBOX */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3 ">
              <Tippy
                content={`See all the messages, queries and feedback sent by the students to college. Click on "Show more" to see all messages in detail`}
              >
                <i class="fas fa-question-circle info"></i>
              </Tippy>
              <h3 className="text-center">Inbox</h3>

              <div className="card">
                <div className="card-body my-1">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    Lorem ipsum is one of the main thhdf iosfi dsopid osg
                    dsgdiosg dois god sogdos gods godsug oiut idb foidjdsihdaoi
                    ioadu gd fgoidafiaghaudi fg
                  </p>
                </div>
                <hr />
                <div className="card-body my-1">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    Lorem ipsum is one of the main thhdf iosfi dsopid osg
                    dsgdiosg dois god sogdos gods godsug oiut idb foidjdsihdaoi
                    ioadu gd fgoidafiaghaudi fg
                  </p>
                </div>
              </div>
              <button type="submit" className="btn btn-link my-2">
                Show more
              </button>
            </div>
            <hr />
            {/* RECENT NOTICE */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3 ">
              <Tippy
                content={`These are all the recent notices sent by the college to students and teachers. Click on "Show more" to go to the Notice page`}
              >
                <i class="fas fa-question-circle info"></i>
              </Tippy>
              <h3 className="text-center">Recent Notice</h3>

              <div className="card">
                <div className="card-body my-1">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    Lorem ipsum is one of the main thhdf iosfi dsopid osg
                    dsgdiosg dois god sogdos gods godsug oiut idb foidjdsihdaoi
                    ioadu gd fgoidafiaghaudi fg
                  </p>
                </div>
                <hr />
                <div className="card-body my-1">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    Lorem ipsum is one of the main thhdf iosfi dsopid osg
                    dsgdiosg dois god sogdos gods godsug oiut idb foidjdsihdaoi
                    ioadu gd fgoidafiaghaudi fg
                  </p>
                </div>
              </div>
              <button type="submit" className="btn btn-link my-2">
                Show more
              </button>
            </div>
          </div>

          {/* CARD SECTION */}

          <div className="row mx-2 my-3 border">
            {/* CALANDER */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3 ">
              <Tippy
                content={`Nepali calander to see important dates and other remainders for Admin`}
              >
                <i class="fas fa-question-circle info"></i>
              </Tippy>
              <h3 className="text-center">Calander</h3>
              <div className="calander border">
                <iframe
                  src="https://www.hamropatro.com/widgets/calender-medium.php"
                  frameBorder={0}
                  scrolling="no"
                  marginWidth={0}
                  marginHeight={0}
                  style={{
                    border: "none",
                    overflow: "hidden",
                    width: 295,
                    height: 385,
                  }}
                  allowTransparency="true"
                />
              </div>
            </div>

            {/* UPCOMING EVENTS */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
              <Tippy
                content={`Short preview of Upcoming Events, functions or programms in the college. Click on "Show more" to view Uppcoming events page in detail`}
              >
                <i class="fas fa-question-circle info"></i>
              </Tippy>
              <h3 className="text-center">Upcoming Events</h3>
              <div className="container py-3">
                <div className="row mb-2">
                  <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                      <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">Sports Week</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto" id="inbdf">
                          Dear Students, Sports week is going to be started from
                          24th Chaitra, 2077 ....
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                      <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">Post title</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto" id="ipgdk">
                          Dear Students, Sports week is going to be started from
                          24th Chaitra, 2077 ....
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                      <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">Post title</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                      <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">Post title</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
