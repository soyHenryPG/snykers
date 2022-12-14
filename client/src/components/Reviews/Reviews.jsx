import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/reviews.css";
import { CiUser } from "react-icons/ci";
// import { useSelector } from "react-redux";
import "../../styles/reviewsDetails.css";
import NoReviews  from './NoReviews'
import { getReviewProduct } from "../../redux/features/reviews/reviewsActions";

import StarsReview from "../StarsReview/StarsReview";

const Reviews = ({ id }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.reviews);
  console.log("ESTO ES ID DE PARAMETROS", id);
  console.log("ESTO ES EL REVIEW DEL PRODUCT", product);

  // useEffect(() => {
  //   dispatch(getReviewProduct(id));
  // }, [id, dispatch]);



  return (
    <>
      <h3 className="section-name">Reviews</h3>
      {product && product.length ? (
        product.map((e) => {
          return (

            // <div className="master">




            <div className="container">

              <div className="container-reviews">

                      {/*img del usuario */}
                <div className="review-image">
                  {e.user.image ? (
                    <img src={e.user.image} alt="not " />
                    ) : (
                      <CiUser />
                      )}
                  </div>


                  <div className="review-name">
                  {/* <p>{e.user.username}</p> */}
                  {/*titulo de la review */}
                  <h6>user said: </h6>
                  </div>

                  <div className="review-stars">
                  {/*con la cantidad de rating que tenga */}
                  <StarsReview stars={e.rating} />
                  </div>


                  <div className="comment">
                  <input
                    type="text"
                    value={e.description}
                    className="input-comment"
                    />
                </div>

              </div>
                {/*body de la review */}
        

            </div>

      // </div> 
          );
        })
      ) : (
        <>
          <NoReviews />
        </>
      )}
    </>
  );
};

export default Reviews;