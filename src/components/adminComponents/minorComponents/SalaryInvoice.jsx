import React, { useState } from "react";
import "../../../styles/adminStyles/dashboard.css";
import { Button, Modal } from "react-bootstrap";
const SalaryInvoice = ({props, of, ID}) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Salary Payment Invoice
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
            SALARY PAYMENT INVOICE
          </p>
          <div id="is8g" className="row">
            <div
              id="iqig"
              className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 py-3"
            >
              <p id="ikl06">Bill No: 11232B</p>
              <p id="ieovd">Name: Nischal Khanal</p>
              <p id="ipzai">{of} ID: {ID}</p>
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
                <th scope="col">Salary Paid</th>
                <th scope="col">Year</th>
                <th scope="col">Month/s</th>
                <th scope="col">Date</th>
                <th scope="col">Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Rs. 4,500</td>
                <td>2076</td>
                <td>Baisakh</td>
                <td>2019-04-22, Monday, 4:45PM</td>
                <td>Bank</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Rs. 2,,000</td>
                <td>2076</td>
                <td>Ashar, Shrawan</td>
                <td>2019-06-02, Wednesday, 4:10PM</td>
                <td>Online (Esewa)</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Rs. 12,300</td>
                <td>2076</td>
                <td>Bhadra, Asoj, Kartik, Magshir</td>
                <td>2019-08-11, Sunday, 3:45PM</td>
                <td>Bank</td>
              </tr>
            </tbody>
          </table>
          <p className="text-left"></p>
          <div>
            <b>Total Paid: Rs.23.000</b>
          </div>

          <p className="text-right" id="id5yj">
            ---------------------------
          </p>
          <p className="text-right" id="ikyrg">
            Signature of Accountant
          </p>
          <p className="text-center" id="iyv5r">
            All the above amount is paid as salary to the {of} by the College.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="success">Download</Button>
        <Button variant="info">Print</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SalaryInvoice;
