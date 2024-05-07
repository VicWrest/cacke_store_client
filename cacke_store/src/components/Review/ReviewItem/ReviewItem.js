import './ReviewItem.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

export const PostCard = ({
  title,
  description,
  deletePost,
  handleEditFormShow,
  handleSelectPost,
  isAdmin,
}) => {
  const showEditForm = () => {
    handleSelectPost();
    handleEditFormShow();
  };

  return (
    <div className='post'>
      <div className='postContent'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
    </div>
      </div>
      {isAdmin && (
        <div className='postControl'>
          <button className='editBtn' onClick={showEditForm}>
            <EditIcon />
          </button>
          <button className='deleteBtn' onClick={deletePost}>
            <DeleteForeverIcon />
          </button>
        </div>
      )}
    </div>
  );
};