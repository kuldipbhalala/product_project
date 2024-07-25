import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Productpage() {

  const [data, setData] = useState();
  console.log(data, "datadatadatadatadatadatadata");
  
  const baseURI = `https://fakestoreapi.com/products`

  useEffect(() => {
    axios.get(`${baseURI}`).then((response) => {
      setData(response.data)
    })

  }, []);

  return (
    <div>

      <section className="product-section pt-3">
        <div className="container">
          <div className="row row-grid">
            <div className="breadcrumb-section">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Main site</a></li>
                <li className="breadcrumb-item"><a href="#">Electronics</a></li>
                <li className="breadcrumb-item active" aria-current="page">Home Controller Google Alexa</li>
              </ul>
            </div>
          </div>

          <div className="row row-grid">
            <div className="col-lg-6">
              <div className="container product-slider">
                <div className="carousel-container position-relative row ">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-slide-number={0}>
                        <img src={data?.image} style={{ width: '70%' }} className="d-block ml-6" alt="..." data-remote="./assets/img/Rectangle.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                      </div>

                      {/* <div className="carousel-item" data-slide-number={1}>
                        <img src="./assets/img/Rectangle1.png" className="d-block w-100" alt="..." data-remote="./assets/img/Rectangle1.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                      </div>
                      <div className="carousel-item" data-slide-number={2}>
                        <img src="./assets/img/Rectangle2.png" className="d-block w-100" alt="..." data-remote="./assets/img/Rectangle2.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                      </div>
                      <div className="carousel-item" data-slide-number={3}>
                        <img src="./assets/img/Rectangle3.png" className="d-block w-100" alt="..." data-remote="./assets/img/Rectangle3.png" data-type="image" data-toggle="lightbox" data-gallery="example-gallery" />
                      </div> */}

                    </div>
                  </div>
                  {/* Carousel Navigation */}
                  <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row mx-0">
                          <div id="carousel-selector-0" className="thumb col-lg-4 col-sm-4 col-4 px-1 py-2 selected" data-target="#myCarousel" data-slide-to={0}>
                            <img src={data?.image} className="img-fluid" alt="..." />
                          </div>
                          <div id="carousel-selector-1" className="thumb col-lg-4 col-sm-4 col-4 px-1 py-2" data-target="#myCarousel" data-slide-to={1}>
                            <img src={data?.image} className="img-fluid" alt="..." />
                          </div>
                          <div id="carousel-selector-2" className="thumb col-lg-4 col-sm-4 col-4 px-1 py-2" data-target="#myCarousel" data-slide-to={2}>
                            <img src={data?.image} className="img-fluid" alt="..." />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-thumbs" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-thumbs" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div> {/* /row */}
              </div> {/* /container */}
              <div className="customer-product-review">
                <div className="review-title">
                  <h5><span className="r-title">Reviews:</span> <span className="r-rate">{data?.rating?.rate}</span> <span className="t-gray"> (reviews)</span> </h5>
                  <div className="p-rateing  d-flex">
                    <span className="static-rating static-rating-sm d-block">
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star t-gray" /></span>
                  </div>
                </div>
                <div className="pd-rate">
                  <div className="p-rateing  d-flex">
                    <span className="static-rating static-rating-sm d-block">
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star t-gray" /></span>
                    <p className="mb-0 ml-3"><span className="t-gray">{data?.rate} (3 reviews) </span> </p>
                  </div>
                  <div className="p-rate">
                    <a href="#" className="btn  ml-2 bg--gray rounded-pill hover-translate-y-n3"><svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.70646 10.427L6.25603 9.4384L6.81937 10.4179C6.4792 10.6451 6.04978 10.6486 5.70646 10.427ZM5.44985 2.5283C5.03654 2.22579 4.49658 1.94781 3.90781 1.94781C2.55758 1.94781 1.76506 3.01789 2.02923 4.48669C2.48153 7.00141 6.25603 9.4384 6.25603 9.4384C5.70646 10.427 5.70646 10.427 5.70646 10.427L5.70433 10.4256L5.70081 10.4233L5.68972 10.4161C5.68055 10.41 5.66786 10.4017 5.65186 10.391C5.61989 10.3698 5.57466 10.3394 5.51794 10.3004C5.40458 10.2225 5.24483 10.11 5.05285 9.96756C4.67036 9.6838 4.15267 9.27581 3.61645 8.78064C3.08325 8.28827 2.51135 7.69106 2.03439 7.02601C1.56413 6.37028 1.13673 5.58056 0.979433 4.70597C0.799952 3.70807 0.9613 2.71237 1.52714 1.94786C2.09662 1.17843 2.96361 0.79541 3.90781 0.79541C4.88287 0.79541 5.69338 1.29035 6.19621 1.68542C6.21646 1.70133 6.2364 1.71723 6.25603 1.7331C6.27567 1.71723 6.29561 1.70133 6.31586 1.68542C6.81869 1.29035 7.6292 0.79541 8.60426 0.79541C10.7136 0.79541 11.9304 2.90127 11.5234 4.75244C11.3367 5.60123 10.9043 6.3742 10.4331 7.02312C9.95537 7.68106 9.39076 8.27536 8.86539 8.76773C8.33737 9.26259 7.83062 9.67154 7.4567 9.95648C7.26908 10.0994 7.11325 10.2125 7.00278 10.2908C6.94751 10.3299 6.90347 10.3605 6.87237 10.3819C6.86449 10.3873 6.85744 10.3921 6.85124 10.3964C6.8452 10.4005 6.83997 10.404 6.83558 10.407L6.82483 10.4143L6.82143 10.4165L6.81937 10.4179C6.81937 10.4179 6.81937 10.4179 6.25603 9.4384C6.25603 9.4384 9.93416 6.98166 10.4828 4.48669C10.747 3.28541 9.95448 1.94781 8.60426 1.94781C8.01549 1.94781 7.47552 2.22579 7.06222 2.5283C6.5689 2.88938 6.25603 3.28541 6.25603 3.28541C6.25603 3.28541 5.94317 2.88938 5.44985 2.5283Z" className="svg-color" />
                    </svg></a>
                  </div>
                </div>
                {/* Product title */}
                <p className="text-sm mb-0 mt-2 product-detail">Wherever your ideas take you, you’ll get there
                  faster than ever with high‑performance processors and memory, advanced graphics,
                  blazing‑fast storage, and more. </p>
                <div className="mt-2">
                  <p className="mb-0 t-black13">Rafał Pacyk</p>
                  <span>CEO InfinityRain interactive agency</span>
                </div>
              </div>
              <hr />
              <div className="customer-product-review">
                <div className="pd-rate">
                  <div className="p-rateing  d-flex">
                    <span className="static-rating static-rating-sm d-block">
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star voted text-primary" />
                      <i className="star fas fa-star t-gray" /></span>
                    <p className="mb-0 ml-3"><span className="t-gray">4.7/5 (3 reviews) </span> </p>
                  </div>
                  <div className="p-rate">
                    <a href="#" className="btn  ml-2 bg--gray rounded-pill hover-translate-y-n3"><svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.70646 10.427L6.25603 9.4384L6.81937 10.4179C6.4792 10.6451 6.04978 10.6486 5.70646 10.427ZM5.44985 2.5283C5.03654 2.22579 4.49658 1.94781 3.90781 1.94781C2.55758 1.94781 1.76506 3.01789 2.02923 4.48669C2.48153 7.00141 6.25603 9.4384 6.25603 9.4384C5.70646 10.427 5.70646 10.427 5.70646 10.427L5.70433 10.4256L5.70081 10.4233L5.68972 10.4161C5.68055 10.41 5.66786 10.4017 5.65186 10.391C5.61989 10.3698 5.57466 10.3394 5.51794 10.3004C5.40458 10.2225 5.24483 10.11 5.05285 9.96756C4.67036 9.6838 4.15267 9.27581 3.61645 8.78064C3.08325 8.28827 2.51135 7.69106 2.03439 7.02601C1.56413 6.37028 1.13673 5.58056 0.979433 4.70597C0.799952 3.70807 0.9613 2.71237 1.52714 1.94786C2.09662 1.17843 2.96361 0.79541 3.90781 0.79541C4.88287 0.79541 5.69338 1.29035 6.19621 1.68542C6.21646 1.70133 6.2364 1.71723 6.25603 1.7331C6.27567 1.71723 6.29561 1.70133 6.31586 1.68542C6.81869 1.29035 7.6292 0.79541 8.60426 0.79541C10.7136 0.79541 11.9304 2.90127 11.5234 4.75244C11.3367 5.60123 10.9043 6.3742 10.4331 7.02312C9.95537 7.68106 9.39076 8.27536 8.86539 8.76773C8.33737 9.26259 7.83062 9.67154 7.4567 9.95648C7.26908 10.0994 7.11325 10.2125 7.00278 10.2908C6.94751 10.3299 6.90347 10.3605 6.87237 10.3819C6.86449 10.3873 6.85744 10.3921 6.85124 10.3964C6.8452 10.4005 6.83997 10.404 6.83558 10.407L6.82483 10.4143L6.82143 10.4165L6.81937 10.4179C6.81937 10.4179 6.81937 10.4179 6.25603 9.4384C6.25603 9.4384 9.93416 6.98166 10.4828 4.48669C10.747 3.28541 9.95448 1.94781 8.60426 1.94781C8.01549 1.94781 7.47552 2.22579 7.06222 2.5283C6.5689 2.88938 6.25603 3.28541 6.25603 3.28541C6.25603 3.28541 5.94317 2.88938 5.44985 2.5283Z" className="svg-color" />
                    </svg></a>
                  </div>
                </div>
                {/* Product title */}
                <p className="text-sm mb-0 mt-2 product-detail">Wherever your ideas take you, you’ll get there
                  faster than ever with high‑performance processors and memory, advanced graphics,
                  blazing‑fast storage, and more. </p>
                <div className="mt-2">
                  <p className="mb-0 t-black13">Rafał Pacyk</p>
                  <span>CEO InfinityRain interactive agency</span>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <a className="text-primary text-underline">More reviews</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pd-rate">
                <div className="p-rateing  d-flex">
                  <span className="static-rating static-rating-sm d-block">
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star t-gray" /></span>
                  <p className="mb-0 ml-3"><span className="t-gray">4.7/5 (3 reviews) </span> </p>
                </div>
                <div className="p-rate">
                  <a href="#" className="btn  ml-2 bg--gray rounded-pill hover-translate-y-n3"><svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.70646 10.427L6.25603 9.4384L6.81937 10.4179C6.4792 10.6451 6.04978 10.6486 5.70646 10.427ZM5.44985 2.5283C5.03654 2.22579 4.49658 1.94781 3.90781 1.94781C2.55758 1.94781 1.76506 3.01789 2.02923 4.48669C2.48153 7.00141 6.25603 9.4384 6.25603 9.4384C5.70646 10.427 5.70646 10.427 5.70646 10.427L5.70433 10.4256L5.70081 10.4233L5.68972 10.4161C5.68055 10.41 5.66786 10.4017 5.65186 10.391C5.61989 10.3698 5.57466 10.3394 5.51794 10.3004C5.40458 10.2225 5.24483 10.11 5.05285 9.96756C4.67036 9.6838 4.15267 9.27581 3.61645 8.78064C3.08325 8.28827 2.51135 7.69106 2.03439 7.02601C1.56413 6.37028 1.13673 5.58056 0.979433 4.70597C0.799952 3.70807 0.9613 2.71237 1.52714 1.94786C2.09662 1.17843 2.96361 0.79541 3.90781 0.79541C4.88287 0.79541 5.69338 1.29035 6.19621 1.68542C6.21646 1.70133 6.2364 1.71723 6.25603 1.7331C6.27567 1.71723 6.29561 1.70133 6.31586 1.68542C6.81869 1.29035 7.6292 0.79541 8.60426 0.79541C10.7136 0.79541 11.9304 2.90127 11.5234 4.75244C11.3367 5.60123 10.9043 6.3742 10.4331 7.02312C9.95537 7.68106 9.39076 8.27536 8.86539 8.76773C8.33737 9.26259 7.83062 9.67154 7.4567 9.95648C7.26908 10.0994 7.11325 10.2125 7.00278 10.2908C6.94751 10.3299 6.90347 10.3605 6.87237 10.3819C6.86449 10.3873 6.85744 10.3921 6.85124 10.3964C6.8452 10.4005 6.83997 10.404 6.83558 10.407L6.82483 10.4143L6.82143 10.4165L6.81937 10.4179C6.81937 10.4179 6.81937 10.4179 6.25603 9.4384C6.25603 9.4384 9.93416 6.98166 10.4828 4.48669C10.747 3.28541 9.95448 1.94781 8.60426 1.94781C8.01549 1.94781 7.47552 2.22579 7.06222 2.5283C6.5689 2.88938 6.25603 3.28541 6.25603 3.28541C6.25603 3.28541 5.94317 2.88938 5.44985 2.5283Z" className="svg-color" />
                  </svg></a>
                </div>
              </div>
              {/* Product title */}
              <h5 className="h4 store-title">{data?.title.slice(0, 22)}</h5>
              <p className="text-sm mb-0 product-detail">There is only that moment and the incredible certainty that
                everything under the sun has been.</p>
              <div className="p-color mt-3">
                <p className="mb-0">COLOR VARIATION:</p>
                <ul>
                  <li>
                    <a className="active">Dark</a>
                  </li>
                  <li>
                    <a>light</a>
                  </li>
                </ul>
              </div>
              <div className="product-price">
                <span className="h3 mb-0 p-price">{data?.price}</span>
                <sup className="h3 mb-0 sub-price">131.50</sup>
              </div>
              <div className="cart-buttons">
                <a href="#" className="btn btn-primary rounded-pill btn-icon shadow hover-shadow-lg hover-translate-y-n3">
                  <span className="btn-inner--text">Add to cart</span>
                  <span className="btn-inner--icon">
                    <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" fill="white" />
                    </svg>
                  </span>
                </a>
                <p className="mb-0 t-black14"><span className="t-gray">Category:</span> Electronics</p>
                <p className="mb-0 t-black14"><span className="t-gray">ID:</span> 2188641</p>
              </div>
              <div className="store-tabs" id="accordion" role="tablist">
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        DESCRIPTION
                      </a>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                    <div className="card-body">
                      {data?.description}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingTwo">
                    <h5 className="mb-0">
                      <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        SPECIFICATION
                      </a>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="card-body">
                      Wherever your ideas take you, you’ll get there faster than ever with
                      high‑performance processors and memory, advanced graphics
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingThree">
                    <h5 className="mb-0">
                      <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        DETAILS
                      </a>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="card-body">
                      Wherever your ideas take you, you’ll get there faster than ever with
                      high‑performance processors and memory, advanced graphics
                    </div>
                  </div>
                </div>
              </div>
              <div className="button">
                <a className="text-primary btn-instruction"><span className="btn-inner--icon">
                  <svg className="w-auto mr-2" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" className="svg-color" />
                  </svg>
                </span> Download instruction .pdf </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Products */}
      <section className="top-product">
        <div className="container">
          <div className="row">
            <div className="pr-title">
              <h3 className=" mt-4 store-title-medium text-primary">Related products</h3>
            </div>
          </div>
          <div className="row">

            {

            }

            <div className="col-xl-3 col-lg-4 col-sm-6 product-box">
              <div className="card card-product">
                <div className="card-image">
                  <a href="#">
                    <img alt="Image placeholder" src="./assets/img/google-assistant.png" className="img-center img-fluid" />
                  </a>
                </div>
                <div className="card-body pt-0">
                  <span className="static-rating static-rating-sm">
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-gray" />
                  </span>
                  <h6><a className="t-black13" href="#">Home Controller Google Alexa</a></h6>
                  <p className="text-sm">
                    <span className="td-gray">Category:</span> Electronics
                  </p>
                  <div className="product-price mt-3">
                    <span className="card-price t-black15">$12.90</span>
                    <button type="button" className="action-item pcart-icon bg-primary" data-toggle="tooltip" data-original-title="Wishlist">
                      <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" fill="white" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="actions card-product-actions" data-animation-in="slideInLeft" data-animation-out="slideOutLeft">
                  <button type="button" className="action-item wishlist-icon bg-light-gray" data-toggle="tooltip" data-original-title="Wishlist">
                    <svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.70646 10.427L6.25603 9.4384L6.81937 10.4179C6.4792 10.6451 6.04978 10.6486 5.70646 10.427ZM5.44985 2.5283C5.03654 2.22579 4.49658 1.94781 3.90781 1.94781C2.55758 1.94781 1.76506 3.01789 2.02923 4.48669C2.48153 7.00141 6.25603 9.4384 6.25603 9.4384C5.70646 10.427 5.70646 10.427 5.70646 10.427L5.70433 10.4256L5.70081 10.4233L5.68972 10.4161C5.68055 10.41 5.66786 10.4017 5.65186 10.391C5.61989 10.3698 5.57466 10.3394 5.51794 10.3004C5.40458 10.2225 5.24483 10.11 5.05285 9.96756C4.67036 9.6838 4.15267 9.27581 3.61645 8.78064C3.08325 8.28827 2.51135 7.69106 2.03439 7.02601C1.56413 6.37028 1.13673 5.58056 0.979433 4.70597C0.799952 3.70807 0.9613 2.71237 1.52714 1.94786C2.09662 1.17843 2.96361 0.79541 3.90781 0.79541C4.88287 0.79541 5.69338 1.29035 6.19621 1.68542C6.21646 1.70133 6.2364 1.71723 6.25603 1.7331C6.27567 1.71723 6.29561 1.70133 6.31586 1.68542C6.81869 1.29035 7.6292 0.79541 8.60426 0.79541C10.7136 0.79541 11.9304 2.90127 11.5234 4.75244C11.3367 5.60123 10.9043 6.3742 10.4331 7.02312C9.95537 7.68106 9.39076 8.27536 8.86539 8.76773C8.33737 9.26259 7.83062 9.67154 7.4567 9.95648C7.26908 10.0994 7.11325 10.2125 7.00278 10.2908C6.94751 10.3299 6.90347 10.3605 6.87237 10.3819C6.86449 10.3873 6.85744 10.3921 6.85124 10.3964C6.8452 10.4005 6.83997 10.404 6.83558 10.407L6.82483 10.4143L6.82143 10.4165L6.81937 10.4179C6.81937 10.4179 6.81937 10.4179 6.25603 9.4384C6.25603 9.4384 9.93416 6.98166 10.4828 4.48669C10.747 3.28541 9.95448 1.94781 8.60426 1.94781C8.01549 1.94781 7.47552 2.22579 7.06222 2.5283C6.5689 2.88938 6.25603 3.28541 6.25603 3.28541C6.25603 3.28541 5.94317 2.88938 5.44985 2.5283Z" className="svg-color" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 product-box">
              <div className="card card-product">
                <div className="card-image">
                  <a href="#">
                    <img alt="Image placeholder" src="./assets/img/google-assistant.png" className="img-center img-fluid" />
                  </a>
                </div>
                <div className="card-body pt-0">
                  <span className="static-rating static-rating-sm">
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-gray" />
                  </span>
                  <h6><a className="t-black13" href="#">Home Controller Google Alexa</a></h6>
                  <p className="text-sm">
                    <span className="td-gray">Category:</span> Electronics
                  </p>
                  <div className="product-price mt-3">
                    <span className="card-price t-black15">$12.90</span>
                    <button type="button" className="action-item pcart-icon bg-primary" data-toggle="tooltip" data-original-title="Wishlist">
                      <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" fill="white" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="actions card-product-actions" data-animation-in="slideInLeft" data-animation-out="slideOutLeft">
                  <button type="button" className="action-item wishlist-icon bg-light-gray" data-toggle="tooltip" data-original-title="Wishlist">
                    <svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.70646 10.427L6.25603 9.4384L6.81937 10.4179C6.4792 10.6451 6.04978 10.6486 5.70646 10.427ZM5.44985 2.5283C5.03654 2.22579 4.49658 1.94781 3.90781 1.94781C2.55758 1.94781 1.76506 3.01789 2.02923 4.48669C2.48153 7.00141 6.25603 9.4384 6.25603 9.4384C5.70646 10.427 5.70646 10.427 5.70646 10.427L5.70433 10.4256L5.70081 10.4233L5.68972 10.4161C5.68055 10.41 5.66786 10.4017 5.65186 10.391C5.61989 10.3698 5.57466 10.3394 5.51794 10.3004C5.40458 10.2225 5.24483 10.11 5.05285 9.96756C4.67036 9.6838 4.15267 9.27581 3.61645 8.78064C3.08325 8.28827 2.51135 7.69106 2.03439 7.02601C1.56413 6.37028 1.13673 5.58056 0.979433 4.70597C0.799952 3.70807 0.9613 2.71237 1.52714 1.94786C2.09662 1.17843 2.96361 0.79541 3.90781 0.79541C4.88287 0.79541 5.69338 1.29035 6.19621 1.68542C6.21646 1.70133 6.2364 1.71723 6.25603 1.7331C6.27567 1.71723 6.29561 1.70133 6.31586 1.68542C6.81869 1.29035 7.6292 0.79541 8.60426 0.79541C10.7136 0.79541 11.9304 2.90127 11.5234 4.75244C11.3367 5.60123 10.9043 6.3742 10.4331 7.02312C9.95537 7.68106 9.39076 8.27536 8.86539 8.76773C8.33737 9.26259 7.83062 9.67154 7.4567 9.95648C7.26908 10.0994 7.11325 10.2125 7.00278 10.2908C6.94751 10.3299 6.90347 10.3605 6.87237 10.3819C6.86449 10.3873 6.85744 10.3921 6.85124 10.3964C6.8452 10.4005 6.83997 10.404 6.83558 10.407L6.82483 10.4143L6.82143 10.4165L6.81937 10.4179C6.81937 10.4179 6.81937 10.4179 6.25603 9.4384C6.25603 9.4384 9.93416 6.98166 10.4828 4.48669C10.747 3.28541 9.95448 1.94781 8.60426 1.94781C8.01549 1.94781 7.47552 2.22579 7.06222 2.5283C6.5689 2.88938 6.25603 3.28541 6.25603 3.28541C6.25603 3.28541 5.94317 2.88938 5.44985 2.5283Z" className="svg-color" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 product-box">
              <div className="card card-product">
                <div className="card-image">
                  <a href="#">
                    <img alt="Image placeholder" src="./assets/img/google-assistant.png" className="img-center img-fluid" />
                  </a>
                </div>
                <div className="card-body pt-0">
                  <span className="static-rating static-rating-sm">
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-gray" />
                  </span>
                  <h6><a className="t-black13" href="#">Home Controller Google Alexa</a></h6>
                  <p className="text-sm">
                    <span className="td-gray">Category:</span> Electronics
                  </p>
                  <div className="product-price mt-3">
                    <span className="card-price t-black15">$12.90</span>
                    <button type="button" className="action-item pcart-icon bg-primary" data-toggle="tooltip" data-original-title="Wishlist">
                      <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" fill="white" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="actions card-product-actions" data-animation-in="slideInLeft" data-animation-out="slideOutLeft">
                  <button type="button" className="action-item wishlist-icon bg-light-gray" data-toggle="tooltip" data-original-title="Wishlist">
                    <svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.70646 10.427L6.25603 9.4384L6.81937 10.4179C6.4792 10.6451 6.04978 10.6486 5.70646 10.427ZM5.44985 2.5283C5.03654 2.22579 4.49658 1.94781 3.90781 1.94781C2.55758 1.94781 1.76506 3.01789 2.02923 4.48669C2.48153 7.00141 6.25603 9.4384 6.25603 9.4384C5.70646 10.427 5.70646 10.427 5.70646 10.427L5.70433 10.4256L5.70081 10.4233L5.68972 10.4161C5.68055 10.41 5.66786 10.4017 5.65186 10.391C5.61989 10.3698 5.57466 10.3394 5.51794 10.3004C5.40458 10.2225 5.24483 10.11 5.05285 9.96756C4.67036 9.6838 4.15267 9.27581 3.61645 8.78064C3.08325 8.28827 2.51135 7.69106 2.03439 7.02601C1.56413 6.37028 1.13673 5.58056 0.979433 4.70597C0.799952 3.70807 0.9613 2.71237 1.52714 1.94786C2.09662 1.17843 2.96361 0.79541 3.90781 0.79541C4.88287 0.79541 5.69338 1.29035 6.19621 1.68542C6.21646 1.70133 6.2364 1.71723 6.25603 1.7331C6.27567 1.71723 6.29561 1.70133 6.31586 1.68542C6.81869 1.29035 7.6292 0.79541 8.60426 0.79541C10.7136 0.79541 11.9304 2.90127 11.5234 4.75244C11.3367 5.60123 10.9043 6.3742 10.4331 7.02312C9.95537 7.68106 9.39076 8.27536 8.86539 8.76773C8.33737 9.26259 7.83062 9.67154 7.4567 9.95648C7.26908 10.0994 7.11325 10.2125 7.00278 10.2908C6.94751 10.3299 6.90347 10.3605 6.87237 10.3819C6.86449 10.3873 6.85744 10.3921 6.85124 10.3964C6.8452 10.4005 6.83997 10.404 6.83558 10.407L6.82483 10.4143L6.82143 10.4165L6.81937 10.4179C6.81937 10.4179 6.81937 10.4179 6.25603 9.4384C6.25603 9.4384 9.93416 6.98166 10.4828 4.48669C10.747 3.28541 9.95448 1.94781 8.60426 1.94781C8.01549 1.94781 7.47552 2.22579 7.06222 2.5283C6.5689 2.88938 6.25603 3.28541 6.25603 3.28541C6.25603 3.28541 5.94317 2.88938 5.44985 2.5283Z" className="svg-color" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6 product-box">
              <div className="card card-product">
                <div className="card-image">
                  <a href="#">
                    <img alt="Image placeholder" src="./assets/img/google-assistant.png" className="img-center img-fluid" />
                  </a>
                </div>
                <div className="card-body pt-0">
                  <span className="static-rating static-rating-sm">
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-primary" />
                    <i className="star fas fa-star voted text-gray" />
                  </span>
                  <h6><a className="t-black13" href="#">Home Controller Google Alexa</a></h6>
                  <p className="text-sm">
                    <span className="td-gray">Category:</span> Electronics
                  </p>
                  <div className="product-price mt-3">
                    <span className="card-price t-black15">$12.90</span>
                    <button type="button" className="action-item pcart-icon bg-primary" data-toggle="tooltip" data-original-title="Wishlist">
                      <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" fill="white" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="actions card-product-actions" data-animation-in="slideInLeft" data-animation-out="slideOutLeft">
                  <button type="button" className="action-item wishlist-icon bg-light-gray" data-toggle="tooltip" data-original-title="Wishlist">
                    <svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.70646 10.427L6.25603 9.4384L6.81937 10.4179C6.4792 10.6451 6.04978 10.6486 5.70646 10.427ZM5.44985 2.5283C5.03654 2.22579 4.49658 1.94781 3.90781 1.94781C2.55758 1.94781 1.76506 3.01789 2.02923 4.48669C2.48153 7.00141 6.25603 9.4384 6.25603 9.4384C5.70646 10.427 5.70646 10.427 5.70646 10.427L5.70433 10.4256L5.70081 10.4233L5.68972 10.4161C5.68055 10.41 5.66786 10.4017 5.65186 10.391C5.61989 10.3698 5.57466 10.3394 5.51794 10.3004C5.40458 10.2225 5.24483 10.11 5.05285 9.96756C4.67036 9.6838 4.15267 9.27581 3.61645 8.78064C3.08325 8.28827 2.51135 7.69106 2.03439 7.02601C1.56413 6.37028 1.13673 5.58056 0.979433 4.70597C0.799952 3.70807 0.9613 2.71237 1.52714 1.94786C2.09662 1.17843 2.96361 0.79541 3.90781 0.79541C4.88287 0.79541 5.69338 1.29035 6.19621 1.68542C6.21646 1.70133 6.2364 1.71723 6.25603 1.7331C6.27567 1.71723 6.29561 1.70133 6.31586 1.68542C6.81869 1.29035 7.6292 0.79541 8.60426 0.79541C10.7136 0.79541 11.9304 2.90127 11.5234 4.75244C11.3367 5.60123 10.9043 6.3742 10.4331 7.02312C9.95537 7.68106 9.39076 8.27536 8.86539 8.76773C8.33737 9.26259 7.83062 9.67154 7.4567 9.95648C7.26908 10.0994 7.11325 10.2125 7.00278 10.2908C6.94751 10.3299 6.90347 10.3605 6.87237 10.3819C6.86449 10.3873 6.85744 10.3921 6.85124 10.3964C6.8452 10.4005 6.83997 10.404 6.83558 10.407L6.82483 10.4143L6.82143 10.4165L6.81937 10.4179C6.81937 10.4179 6.81937 10.4179 6.25603 9.4384C6.25603 9.4384 9.93416 6.98166 10.4828 4.48669C10.747 3.28541 9.95448 1.94781 8.60426 1.94781C8.01549 1.94781 7.47552 2.22579 7.06222 2.5283C6.5689 2.88938 6.25603 3.28541 6.25603 3.28541C6.25603 3.28541 5.94317 2.88938 5.44985 2.5283Z" className="svg-color" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>

  )
}

export default Productpage