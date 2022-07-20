import React from 'react';
import Header from './header';
import Post from './post';

const PostsPage = () => {
  const [postsData, setPostsData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:5000/posts')
    .then((res) => res.json())
    .then((res) => {setPostsData(res)})
  }, []);

  return (
    <>
      <Header />
      <div className='posts-container'>
        {postsData.map((postData) => <Post key={postData._id} postData={postData} />)}
      </div>
    </>
  );
}

export default PostsPage;