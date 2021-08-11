import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import { Button, Modal, Dropdown } from "react-bootstrap";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";
import Tippy from "@tippyjs/react";

function StudentFee() {
  const [showPayment, setShowPayment] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleClosePayment = () => setShowPayment(false);
  const handleShowPayment = () => setShowPayment(true);

  function InvoiceModal(props) {
    return (
      // INVOICE
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Bill Invoice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="i3hl" className="container py-5 border">
            <p id="itna" className="text-center">
              Caspian Valley College&nbsp;
            </p>
            <p id="i4m1" className="text-center">
              Kumaripati, Lalitpur, 9861444444, 9878678767
            </p>
            <p id="i6wi" className="text-center">
              FEE INVOICE
            </p>
            <div id="is8g" className="row">
              <div
                id="iqig"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 py-3"
              >
                <p id="ikl06">Bill No: 11232B</p>
                <p id="ieovd">Name: Nischal Khanal</p>
                <p id="ipzai">Student ID: 12SA242076</p>
              </div>
              <div
                id="ixgus"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 py-3"
              >
                <p id="i1v0n" />
              </div>
              <div
                id="ikbmp"
                className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 py-3"
              >
                <p id="im1fl">Date: 12th May, 2019</p>
              </div>
            </div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Month/s</th>
                  <th scope="col">Date</th>
                  <th scope="col">Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Rs. 4,500</td>
                  <td>Baisakh, Jestha</td>
                  <td>2019-04-22, Monday, 4:45PM</td>
                  <td>Cash</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Rs. 2,,000</td>
                  <td>Ashar, Shrawan</td>
                  <td>2019-06-02, Wednesday, 4:10PM</td>
                  <td>Online (Esewa)</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Rs. 12,300</td>
                  <td>Bhadra, Asoj, Kartik, Magshir</td>
                  <td>2019-08-11, Sunday, 3:45PM</td>
                  <td>Cash</td>
                </tr>
              </tbody>
            </table>
            <p id="ic6wo" className="text-left"></p>
            <div id="igffi">Total Paid: Rs.23.000</div>
            <p />
            <p id="ievuz" className="text-left">
              <span id="itolf">Status:</span> Not Clear
            </p>
            <div>
              <span id="i14z7">Remaining Amount:</span> Rs. 234.50 Only
            </div>
            <p />
            <p className="text-right" id="id5yj">
              ---------------------------
            </p>
            <p className="text-right" id="ikyrg">
              Signature of Accountant
            </p>
            <p className="text-center" id="iyv5r">
              All the above amount once paid are non refundable in any case.
            </p>
            <div id="itr47" />
            <p />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
          <Tippy content={`Download this invoice to your computer`}>
            <Button variant="success">Download</Button>
          </Tippy>
          <Tippy content={`Print this invoice now`}>
            <Button variant="info">Print</Button>
          </Tippy>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Student's Fee" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
          {/* Sidebar */}
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
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"></main>
            </div>
          </div>
        </div>

        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12 py-3">
          {/* Spacing */}
          <div style={{ height: "45px" }}></div>
          {/* Table */}
          <div className="border mx-1 p-2">
            <TableHeader />
            <table className="table table-bordered text-center align-middle">
              <thead className="thead-dark">
                <tr id="idlowh">
                  <th scope="col">Std. ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Class</th>
                  <th scope="col">Due Month/s</th>
                  <th scope="col">Total Amount (Rs.)</th>
                  <th scope="col">Paid Amount (Rs.)</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Status</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">12SB16</th>
                  <td>Niraj Kafle</td>
                  <td>11</td>
                  <td>Baisakh, Jestha</td>
                  <td>8000.00</td>
                  <td>5000.00</td>
                  <td>Wriet remarks here</td>
                  <td className="text-light bg-info">Not-Clear</td>
                  {/* Dropdown Actions */}
                  <td>
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
                  <td>11</td>
                  <td>Baisakh, Jestha</td>
                  <td>8000.00</td>
                  <td>8000.00</td>
                  <td>Other remarks</td>
                  <td id="ice45i" className="text-light bg-success">
                    Paid
                  </td>
                  {/* Dropdown Actions */}
                  <td>
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
                  <td>11</td>
                  <td>Baisakh, Jestha</td>
                  <td>8000.00</td>
                  <td>8000.00</td>
                  <td>Tution and Canteen fee</td>
                  <td id="ice45i" className="text-light bg-danger">
                    Not-Paid
                  </td>
                  {/* Dropdown Actions */}
                  <td>
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

          {/* ADD STUDENT TO FEE LIST */}
          <div className=" border mx-1 p-3 mt-3">
            <Tippy content="You can add the student to the above list whose fee is due, fee has not been paid or he/she has pending fee payment">
              <i class="fas fa-question-circle info"></i>
            </Tippy>
            <h3 className="text-center">Add Student to Fee list</h3>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Student ID*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Student's ID"
                    required
                    name="profile-first-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Month/s*</label>
                <div className="col">
                  <select multiple class="form-control">
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
                <label className="col-3">Total Amount*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Total Fee Due Amount "
                    name="profile-location"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">
                  Remarks{" "}
                  <Tippy content="Enter anything as a note, remainder or remarks about the student or his/her fee related">
                    <i class="fas fa-question-circle"></i>
                  </Tippy>
                </label>

                <div className="col">
                  <input
                    type="text"
                    placeholder="Remarks"
                    required
                    name="profile-first-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info">
                  Add Student
                </button>
              </div>
            </form>
          </div>

          {/* SEND FEE REMAINDER (BULK) */}
          <div className="border mx-1 mt-3 p-3">
            <Tippy content="You can send bulk remainder to the students about their fee payment. This will send notification to all the selected students (Whose fees are not cleared) and remaind them to pay it on time">
              <i class="fas fa-question-circle info"></i>
            </Tippy>
            <h3 className="text-center">Send Fee Reminder to Student (Bulk)</h3>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Class*</label>
                <div className="col">
                  <select multiple required className="form-control">
                    <option>11 Science</option>
                    <option>12 Science</option>
                    <option>11 Management</option>
                    <option>12 Management</option>
                    <option>11 Humanities</option>
                    <option>12 Humanities</option>
                    <option>Hotel Management</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Section*</label>
                <div className="col">
                  <select multiple required className="form-control">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">
                  Remarks{" "}
                  <Tippy
                    content={`Enter anything as a note, remainder or remarks to the students  you want them to see with fee remainder notification`}
                  >
                    <i class="fas fa-question-circle"></i>
                  </Tippy>
                </label>

                <div className="col">
                  <input
                    type="text"
                    placeholder="Remarks"
                    name="confirm-password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info">
                  Send Remainder to All Students
                </button>
              </div>
            </form>
          </div>

          {/* Make Payment Modal */}
          <Modal show={showPayment} onHide={handleClosePayment}>
            <Modal.Header>
              <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Payment */}
              <div className="border text-center">
                <form className="mt-3">
                  <div className="form-group row align-items-center">
                    <label className="col-3">Remaining Amount*</label>
                    <div className="col">
                      <input
                        type="text"
                        disabled
                        value="3000"
                        placeholder="Enter Total Fee Due Amount "
                        name="profile-location"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row align-items-center">
                    <label className="col-3">Paying Amount*</label>
                    <div className="col">
                      <input
                        type="text"
                        placeholder="Enter Total Fee Due Amount "
                        name="profile-location"
                        required
                        className="form-control"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClosePayment}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleClosePayment}>
                Make Payment
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

export default StudentFee;
