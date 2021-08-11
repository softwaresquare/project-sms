import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import "../../styles/adminStyles/dashboard.css";
import DefaultHeader from "./DefaultHeader";
import TableHeader from "./minorComponents/TableHeader";
import TableFooter from "./minorComponents/TableFooter";

const Inbox = () => {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Inbox" />
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

          <div className="border mx-1 p-2">
            <TableHeader />
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Message</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">04/03/2021</th>
                  <td>Mark</td>
                  <td>markwat@gmail.com</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </td>
                  <td>
                    <i className="fas fa-trash fa-lg mx-2"> </i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">07/03/2021</th>
                  <td>Sita</td>
                  <td>sita55@gmail.com</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </td>
                  <td>
                    <i className="fas fa-trash fa-lg mx-2"> </i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">02/03/2021</th>
                  <td>Hari</td>
                  <td>hari45@gmail.com</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </td>
                  <td>
                    <i className="fas fa-trash fa-lg mx-2"> </i>
                  </td>
                </tr>
              </tbody>
            </table>
            <TableFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
