import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import { Button, Modal,Dropdown, Toast, Row, Col } from "react-bootstrap";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";
import SalaryInvoice from "../minorComponents/SalaryInvoice";

function TeacherSalary() {
  const [showPayment, setShowPayment] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleClosePayment = () => setShowPayment(false);
  const handleShowPayment = () => setShowPayment(true);
  function InvoiceModal(props) {
    return (
      <SalaryInvoice props={props} of='Teacher' ID='1233343R' />
       );
  }
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Teacher's  Salary" />
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

          {/* Table */}
          <div className="border p-2 mx-1">
            <TableHeader />
            <table className="table table-bordered text-center align-middle">
              <thead className="thead-dark">
                <tr id="idlowh">
                  <th scope="col">Teacher ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Month/s</th>
                  <th scope="col">Total Paid</th>
                  <th scope="col">Pending Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">12SB16</th>
                  <td>Niraj Kafle</td>

                  <td>Baisakh, Jestha</td>
                  <td>Rs. 56,000</td>
                  <td>Rs. 30,200</td>
                  <td className="text-light bg-danger">Pending</td>
                  <td className="nav-item dropdown">
                  <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Actions
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          <i className="far fa-bell" />
                          &nbsp; Notify
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          onClick={() => setModalShow(true)}
                        >
                          <i className="far fa-file-invoice" />
                          &nbsp; View Invoice
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <i className="far fa-check" />
                          &nbsp; Mark Paid
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <i className="fas fa-edit" /> &nbsp; Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          onClick={handleShowPayment}
                        >
                          <i className="far fa-credit-card" />
                          &nbsp; Make Payment
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <i className="far fa-trash-alt" />
                          &nbsp; Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr>
                  <th scope="row">12SB16</th>
                  <td>Niraj Kafle</td>

                  <td>-</td>
                  <td>Rs. 3,38,900</td>
                  <td>Rs. 0</td>
                  <td id="ice45i" className="text-light  bg-success">
                    Paid
                  </td>
                  <td className="nav-item dropdown">
                  <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        Actions
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          <i className="far fa-bell" />
                          &nbsp; Notify
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          onClick={() => setModalShow(true)}
                        >
                          <i className="far fa-file-invoice" />
                          &nbsp; View Invoice
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <i className="far fa-check" />
                          &nbsp; Mark Paid
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <i className="fas fa-edit" /> &nbsp; Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          onClick={handleShowPayment}
                        >
                          <i className="far fa-credit-card" />
                          &nbsp; Make Payment
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <i className="far fa-trash-alt" />
                          &nbsp; Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              </tbody>
            </table>
            <TableFooter />
          </div>

          {/* ADD TEACHER'S  PENDING SALARY */}
          <div className="card-body border p-3 mx-1 mt-3">
            <h3 className="text-center">Add Teacher's Pending Salary</h3>
            <hr />
            <form className="mt-3 ">
              <div className="form-group row align-items-center">
                <label className="col-3">Teacher ID*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter ID"
                    name="profile-first-name"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Month/s*</label>
                <div className="col">
                  <select name id className="form-control">
                    <option>Baisakh</option>
                    <option>Jestha</option>
                    <option>Ashad</option>
                    <option>Shrawan</option>
                    <option>Bhadra</option>
                    <option>Ashwin</option>
                    <option>Kartik</option>
                    <option>Mangsir</option>
                    <option>Poush</option>
                    <option>Magh</option>
                    <option>Falgun</option>
                    <option>Chaitra</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Amount*</label>
                <div className="col">
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    required
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn mr-5 btn-info">
                  Add Pending Salary
                </button>
              </div>
            </form>
          </div>

          {/* Make Payment Modal */}

          <Modal show={showPayment} onHide={handleClosePayment}>
            <Modal.Header>
              <Modal.Title>Salary Payment Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Payment */}

              <p>
                Account Holder&#039;s Name: <b> Niraj Kafle</b>
              </p>
              <p>
                Bank Name: <b>Laxmi Chit Fund</b>
              </p>
              <p>
                Branch: <b>Kirtipur</b>
              </p>
              <p>
                Account Number: <b>6765456765459980</b>{" "}
              </p>
              <p>
                Pending Amount: <b>Rs. 45,000</b>{" "}
              </p>
              <hr />
              <p>
                Esewa ID: <b>9861334455</b>{" "}
              </p>
              <hr />
              <p>
                IME Pay: <b>9861334455</b>{" "}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClosePayment}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleClosePayment}>
                Mark Paid
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Show invoice Modal */}

          <InvoiceModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
}

export default TeacherSalary;
