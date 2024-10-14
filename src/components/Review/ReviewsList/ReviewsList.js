import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import { PostCard } from "../ReviewItem/ReviewItem.js";
import React, { useState, useContext } from "react";



const ReviewsList = observer(()=> {

    const {review} = useContext(Context)
    const {product} = useContext(Context)

      return (
        <div key={'reviews-list'}className="review-list">
            {review.reviews.map(item =>{
            return (
                <React.Fragment key={item.id}>
        <PostCard
          id={item.id}
          authorName={item.authorName}
          description={item.description}
          img={item.img}
        />
      </React.Fragment>
    )})
    }
      </div>
);
})



export default ReviewsList;


