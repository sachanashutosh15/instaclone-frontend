import React from 'react';

const Post = (props) => {
  const info = props.postData;
  const [likes, setLikes] = React.useState(info.likes);

  const handleClick = () => {
    fetch('http://localhost:5000/like', {
      method: 'PATCH',
      body: JSON.stringify({
        _id: info._id,
        likes: info.likes,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(res => res.json())
    .then(res => setLikes(res.likes))
  }

  const prePath = 'http://localhost:5000';
  return (
    <>
      <div className='post-card'>
        <div className='post-head'>
          <div>
            <h3 className='post-name'>{info.author}</h3>
            <h5 className='post-place'>{info.location}</h5>
          </div>
          <i className="bi bi-three-dots"></i>
        </div>
        <div className='post-body'>
        <img src={`${prePath}${info.path}`} alt='' />
        </div>
        <div className='post-footer'>
          <div className='post-info'>
            <i className="bi bi-heart" onClick={(e) => handleClick(e)}></i>
            <i className="bi bi-send"></i>
            <p className='post-likesCount'>{likes} likes</p>
          </div>
          <p className='post-date'> { info.date } </p>
          <p className='post-description'> { info.description } </p>
        </div>
      </div>
    </>
  );
}

export default Post;
