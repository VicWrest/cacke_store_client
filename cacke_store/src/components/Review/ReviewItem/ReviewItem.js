import './ReviewItem.css';
import EnLargeImg from '../../modals/EnLargeImg';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

export const PostCard = observer(({
  id,
  authorName,
  description,
  img,
}) => {
  const [imgVisible, setImgVisible] = useState(false);
  return (
    <div className='review'>
      <div className='postContent'>
        <h2 className='username-in-review'>{authorName}</h2>
        <p className='comment-str'>Комментарии</p>
        <p>{description}</p>
        {img &&
          <img className='review-img' src={`${process.env.REACT_APP_API_URL+img}`} onClick={()=> {setImgVisible(true)}}/> 
        }
        <div className='modal-large-img'>
        <EnLargeImg show={imgVisible} onHide={()=> setImgVisible(false)} img={img}/>
        </div>
      </div>
    </div>
  );
})