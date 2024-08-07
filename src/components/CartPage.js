import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CartPage() {

  const [cart, setCart] = useState()
  console.log(cart, "cartcartcartcartcart");

  const baseURI = "https://fakestoreapi.com/products"

  useEffect(() => {
    axios.get(`${baseURI}`).then((response) => {
      setCart(response.data)
    })
  }, [])

  return (
    <div>

      <main>
        <section className="my-cart-section">
          <div className="container">
            {/* Shopping cart table */}
            <div className="row">

              <div className="pr-title mb-4">
                <h3 className=" mt-4 store-title text-primary">My Cart</h3>
                <div className="payment-step">
                  <a href="CartPage" className="btn btn-mycart active">1 - My Cart</a>
                  <a href="Checkout" className="btn btn-mycart">2 - Customer</a>
                  <a href="Mypayment" className="btn btn-mycart">3 - Payment</a>
                </div>
              </div>
            </div>

            {
              cart?.slice(10, 13).map((item, key) => (

                <div className="table-responsive my-cart">
                  <table className="table table-cards align-items-center">
                    <tbody className="list">
                      <tr className="alert">
                        <td>
                          <img alt="Image placeholder" src={item.image} className style={{ width: 66 }} />
                        </td>
                        <td scope="row">
                          <div className="media align-items-center">
                            <a className="text-dark c-list-title mb-0">{item.category}</a>
                          </div>
                        </td>
                        <td className="price">
                          <div className="media-body pl-3">
                            <span className="font-weight-bold mb-2 t-gray p-title">Price</span>
                            <div className="lh-100">
                              <span className="t-black15 p-price font-weight-bold mb-0">{item.price}</span>
                            </div>
                          </div>
                        </td>

                        <td className="qty-box">
                          <span className="font-weight-bold t-gray p-title">Quantity</span>
                          <div className="count-input">
                            <input type="button" defaultValue="<" className="qty-minus" />
                            <input type="number" defaultValue={1} className="qty form-control form-control-sm text-center" />
                            <input type="button" defaultValue=">" className="qty-plus" />
                          </div>
                        </td>
                        <td>
                          <span className="font-weight-bold t-gray p-title">Tax</span>
                          <p className="t-gray p-title">SGST 5% (6.45)</p>
                        </td>
                        <td>
                          <span className="font-weight-bold t-gray p-title">Total</span>
                          <p className="pt-price t-black15">$12.90</p>
                        </td>
                        <td className="text-right">
                          <div className="actions ml-3">
                            <a href="#" className="action-item mr-2" data-dismiss="alert">
                              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.7071 1.70711C18.0976 1.31658 18.0976 0.683417 17.7071 0.292893C17.3166 -0.0976311 16.6834 -0.0976311 16.2929 0.292893L9 7.58579L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292894 0.292893C-0.0976295 0.683417 -0.0976295 1.31658 0.292894 1.70711L7.58579 9L0.292893 16.2929C-0.0976311 16.6834 -0.0976311 17.3166 0.292893 17.7071C0.683418 18.0976 1.31658 18.0976 1.70711 17.7071L9 10.4142L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L10.4142 9L17.7071 1.70711Z" fill="#AFAFAF" />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              )
              )
            }

            {/* Cart information */}
            <div className="card mt-2 bg-primary">
              <div className="card-body">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                    <div className="d-flex align-items-center justify-content-md-end">
                      <span className="h6 text-white d-inline-block mr-3 mb-0">Total value:</span>
                      <span className="h4 mb-0 cart-total text-white">$12.90</span>
                    </div>
                  </div>
                  <div className="col-md-6 order-md-1">
                    <a href="#" className="btn btn-white btn-white btn-icon rounded-pill hover-translate-y-n3">
                      <span className="btn-inner--text text-primary">Proceed to checkout</span>
                      <svg className="w-auto" height={21} viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 8.5C4 9.05229 4.44772 9.5 5 9.5C5.55228 9.5 6 9.05229 6 8.5V6.5H10V8.5C10 9.05229 10.4477 9.5 11 9.5C11.5523 9.5 12 9.05229 12 8.5V6.5H14V15.5C14 17.1569 12.6569 18.5 11 18.5H5C3.34315 18.5 2 17.1569 2 15.5V6.5H4V8.5ZM6 4.5H10C10 3.39543 9.10457 2.5 8 2.5C6.89543 2.5 6 3.39543 6 4.5ZM12 4.5C12 2.29086 10.2091 0.5 8 0.5C5.79086 0.5 4 2.29086 4 4.5L1 4.5C0.447715 4.5 0 4.94772 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H11C13.7614 20.5 16 18.2614 16 15.5V5.5C16 4.94772 15.5523 4.5 15 4.5H12Z" className="svg-color" />
                      </svg>
                    </a>
                    <a href="shop-landing.html" className="btn return-shop text-white">Return to shop</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}

export default CartPage