import './AddNewReview.css';
import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from 'react';

export const AddPostForm = ({ addNewBlogPost, handleAddFormHide }) => {
  const [postDesc, setPostDesc] = useState('');

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value);
  };

  const createPost = (e) => {
    e.preventDefault();
    const post = {
      description: postDesc,
      liked: false,
    };

    addNewBlogPost(post);
    handleAddFormHide();
  };

  useState(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleAddFormHide();
      }
    };

    window.addEventListener('keyup', handleEscape);

    return () => {
      window.removeEventListener('keyup', handleEscape);
    };
  }, []);

  return (
    <>
      <form className='addPostForm' onSubmit={createPost}>
        <button className='hideBtn' onClick={handleAddFormHide}>
          <CancelIcon />
        </button>
        <h2>Новый отзыв</h2>
        <div>
          <textarea
            className='addFormInput'
            name='postDescription'
            placeholder='Общее впечатление'
            value={postDesc}
            onChange={handlePostDescChange}
            rows={8}
            required
          />
        </div>
        <div>
          <button className='blackBtn' type='submit'>
            Создать отзыв
          </button>
        </div>
      </form>
      <div onClick={handleAddFormHide} className='overlay'></div>
    </>
  );
};