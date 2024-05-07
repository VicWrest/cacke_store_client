import { useState } from "react";
import './Review.css'
import { AddPostForm } from "../../components/Review/AddNewReview/AddNewReview";
import CircularProgress from '@material-ui/core/CircularProgress';
import ReviewsList from "../../components/Review/ReviewsList/ReviewsList";


function Review() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddFormShow = () => {
    setShowAddForm(true);
  };

  return (
      <div className='blogPage'>
          {showAddForm && (
          <AddPostForm
            // addNewBlogPost={addNewBlogPost}
            // handleAddFormHide={handleAddFormHide}
          />) }
  
        {/* {showEditForm && (
          <EditPostForm
            handleEditFormHide={handleEditFormHide}
            selectedPost={selectedPost}
            editBlogPost={editBlogPost}
          />
        )} */}
  
        <>
          <h1 className="review-str">Отзывы</h1>
  
            <div className='addNewPost'>
              <button className='blackBtn' onClick={handleAddFormShow}>
                Создать новый пост
              </button>
            </div>
  
          <div className='posts' >
              <ReviewsList />
          </div>
        </>
      </div>
    );
}

export default Review;