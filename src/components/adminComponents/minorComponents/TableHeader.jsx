import React from "react";
import "../../../styles/adminStyles/dashboard.css";
import Tippy from "@tippyjs/react";
import {Dropdown} from "react-bootstrap";
import 'tippy.js/dist/tippy.css';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const TableHeader = () => {
  return (
    <div className="row ">
      {/* SHOW RECORDS */}
      <div className="d-flex flex-row col-xl-3 col-lg-4 col-md-4 col-sm-12 align-content-end flex-wrap ">
        {/* SHOW RECORDS */}
        <p className="p-2">Show</p>
        <div className="dropdown show">
          <Dropdown >
            <Dropdown.Toggle variant="light">
              10
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>15</Dropdown.Item>
              <Dropdown.Item>20</Dropdown.Item>
              <Dropdown.Item>25</Dropdown.Item>
            </Dropdown.Menu>

          </Dropdown>
          
        </div>
        <p className="p-2">Records</p>
      </div>

      {/* BUTTONS */}
      <div className="row col-xl-9 col-lg-8 col-md-8 sm-12">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3 text-right ">
          <Tippy content="Import existing table (.csv) ">
            <button className="btn btn-primary mr-2">
              <i className="far fa-file-import" />
              &nbsp;Import
            </button>
          </Tippy>
          <Tippy content="Export this table (.csv, .xlsx)">
            <a className="btn mr-2 btn-danger">
              <i className="far fa-file-export" />
              &nbsp; Export
            </a>
          </Tippy>
          <Tippy content="Print this table">
            <a className="btn btn-success">
              <i className="far fa-print" />
              &nbsp; Print Table
            </a>
          </Tippy>
        </div>

        {/* SEARCH */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 py-3">
          <div className="input-group">
            <div className="input-group-prepend" />
            <input
              type="search"
              placeholder="Search"
              aria-label="Search app"
              className="form-control form-control-dark border"
            />

            <button className="btn input-group-text">
              <i className="fas fa-search fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
