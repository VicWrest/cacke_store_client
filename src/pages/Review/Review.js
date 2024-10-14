import { useContext, useEffect, useState } from "react";
import './Review.css'
import ReviewsList from "../../components/Review/ReviewsList/ReviewsList";
import {Container} from "react-bootstrap";
import CreateReview from "../../components/modals/CreateReview";
import { getAllReview } from "../../http/reviewAPI";
import {Context} from "../../index";

function Review() {
  const [reviewVisible, setReviewVisible] = useState(false)
  const {review} = useContext(Context);

  useEffect(()=>{
    getAllReview().then((reviews) => review.addReviews(reviews))
    .catch(err => err)
  }, [])

  return (
      <div className='reviewPage'>
        <>
          <h1 className="reviews-str">Отзывы</h1>
          <Container className="d-flex justify-content-center">
            <button
            className="new-review-btn" 
            type="button" 
            class="btn btn-outline-warning"
            onClick={() => setReviewVisible(true)}
            >
              Новый отзыв
            </button>
            <CreateReview show={reviewVisible} onHide={()=> setReviewVisible(false)} />
            </Container>
          <div className='posts' >
              <ReviewsList />
          </div>
        </>
      </div>
    );
}

export default Review;
