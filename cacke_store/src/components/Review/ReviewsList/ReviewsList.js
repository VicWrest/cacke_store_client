import { observer } from "mobx-react-lite";
import { Context } from "../../../index.js";
import { PostCard } from "../ReviewItem/ReviewItem";
import React, { useState, useContext } from "react";



const ReviewsList = observer(()=> {

    const {review} = useContext(Context)
    const {product} = useContext(Context)

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});

      const deletePost = (blogPost) => {
        if (window.confirm(`Удалить ${blogPost.title}?`)) {
          //deleteMutation.mutate(blogPost)
        }
      };

      const handleAddFormShow = () => {
        setShowAddForm(true);
      };
    
      const handleAddFormHide = () => {
        setShowAddForm(false);
      };
    
      const handleEditFormShow = () => {
        setShowEditForm(true);
      };
    
      const handleEditFormHide = () => {
        setShowEditForm(false);
      };
      return (
        <div key={'reviews-list'}className="product-list">
            {review.reviews.map(item =>{
            return (
                <React.Fragment key={item.id}>
        <PostCard
          description={item.description}
        //   deletePost={() => deletePost(item)}
        //   handleEditFormShow={handleEditFormShow}
        //   handleSelectPost={() => handleSelectPost(item)}
        />
      </React.Fragment>
    )})
    }
        </div>
);
})



export default ReviewsList;


