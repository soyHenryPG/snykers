import React from "react";
import { VscEdit } from "react-icons/vsc";
import "../../../../styles/viewEditProduct.css";

const ViewEditProduct = ({ productDetail, setStock, stock }) => {
  return (
    <div className="viewEditContainer d-flex text-green">
      <div className="circle1"></div>
      <form className="viewEdit d-flex ">
        <section className="left d-flex flex-column align-items-center justify-content-center">
          <img
            className="imageCard1"
            src={productDetail.detail_picture}
            alt={productDetail.name}
          />
          <img
            className="imageCard2"
            src={productDetail.detail_picture}
            alt={productDetail.name}
          />
          <fieldset className="d-flex flex-column mb-3">
            Image
            <label>
              <input
                className="input"
                type="text"
                name="image"
                placeholder="https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png"
                value={productDetail.detail_picture}
              />
              <button className="input2 ms-1">
                <VscEdit className="input3" />
              </button>
            </label>
          </fieldset>
        </section>

        {stock ? (
          <section className="right d-flex flex-column">
            <div className="d-flex">
              <fieldset className="d-flex flex-column mb-3">
                Brand
                <label>
                  <input
                    className="input"
                    type="text"
                    name="brand"
                    value={productDetail.brand}
                    placeholder="nike"
                  />
                  <button className="ms-1 me-3 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>

              <fieldset className="d-flex flex-column mb-3">
                Name
                <label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={productDetail.name}
                    placeholder="jordan"
                  />
                  <button className="ms-1 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>
            </div>

            <fieldset className="d-flex flex-column mb-3">
              Description
              <label>
                <input
                  className="input"
                  type="text"
                  name="description"
                  value={productDetail.description}
                  placeholder="This Nike Air Jordan 1 Retro High OG &#39;Shadow&#39; 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015."
                />
                <button className="ms-1 input2">
                  <VscEdit className="input3" />
                </button>
              </label>
            </fieldset>

            <div className="d-flex">
              <fieldset className="d-flex flex-column mb-3">
                Gender
                <label>
                  <input
                    className="input"
                    type="text"
                    name="gender"
                    value={productDetail.gender}
                    placeholder="women"
                  />
                  <button className="ms-1 me-3 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>

              <fieldset className="d-flex flex-column mb-3">
                Category
                <label>
                  <input
                    className="input"
                    type="text"
                    name="category"
                    value={productDetail.category}
                    placeholder="Running"
                  />
                  <button className="ms-1 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>
            </div>

            <div className="d-flex">
              <fieldset className="d-flex flex-column mb-3">
                Color
                <label>
                  <input
                    className="input"
                    type="text"
                    name="color"
                    value={productDetail.color}
                    placeholder="Red"
                  />
                  <button className="ms-1 me-3 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>

              <fieldset className="d-flex flex-column mb-3">
                Collection
                <label>
                  <input
                    className="input"
                    type="text"
                    name="colection"
                    value={productDetail.collection}
                    placeholder="retro"
                  />
                  <button className="ms-1 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>
            </div>

            <div className="d-flex">
              <fieldset className="d-flex flex-column mb-3">
                Release Date
                <label>
                  <input
                    className="input"
                    type="date"
                    name="release_date"
                    value={productDetail.release_date}
                  />
                  <button className="ms-1 me-3 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>

              <fieldset className="d-flex flex-column mb-3">
                Rating
                <label>
                  <input
                    className="input"
                    type="number"
                    name="rating"
                    value={productDetail.rating}
                    placeholder="3"
                  />
                  <button className="ms-1 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>
            </div>

            <fieldset className="d-flex flex-column mb-3">
              Stock
              <label>
                <input
                  type="number"
                  name="ranges"
                  value={productDetail.range}
                  className="input"
                />
                <button className="ms-1 input2">
                  <VscEdit className="input3" />
                </button>
              </label>
            </fieldset>

            <fieldset className="d-flex flex-column mb-3">
              Price
              <label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={productDetail.price}
                  placeholder="150"
                />
                <button className="ms-1 input2">
                  <VscEdit className="input3" />
                </button>
              </label>
            </fieldset>
          </section>
        ) : (
          <button
            onClick={() => {
              setStock(true);
            }}
          ></button>
        )}
      </form>
    </div>
  );
};

export default ViewEditProduct;