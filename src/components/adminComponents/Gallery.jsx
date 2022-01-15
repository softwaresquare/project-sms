import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import "../../styles/adminStyles/dashboard.css";
import DefaultHeader from "./DefaultHeader";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

function Gallery() {
  const images = [1300, 1200, 1100].map((size) => ({
    src: `https://picsum.photos/${size}/${size}`,
  }));

  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Gallery" />
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
          <div style={{ height: "30px" }}></div>

          {/* GALLERY IMAGES */}

          <div
            className="d-flex justify-content-center"
            style={{ height: "600px",width:"1100px"  }}
          >
            <Carousel images={images} />
            
           
          </div>

          {/* ADD NEW IMAGE TO GALLERY */}

          <div className="border p-3 mx-1 mt-3">
            <h3 className='text-center'>Add New Image</h3>
            <hr />
            <form className="mt-3">
              <div className="form-group row">
                <label className="col-3">Description</label>
                <div className="col">
                  <textarea
                    placeholder="Write a short description"
                    name="profile-bio"
                    rows={4}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3">Add File/Photo* (PDF, JPG, PNG)</label>
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
            </form>
            <div
              className="row justify-content-center mt-4"
              style={{ marginBottom: "1.5%" }}
            >
              <button type="submit" className="btn mr-5 btn-info">
                Add Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
