import React from 'react';
import Header from './header';
import Post from './post';

const PostsPage = () => {
  const len = 2;
  const [postsData, setPostsData] = React.useState([]);
  const [currPageData, setCurrPageData] = React.useState([]);
  const [postNum, setPostNum] = React.useState(-1);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(false);
    fetch('https://instaclone-server-ashutosh.herokuapp.com/posts')
    .then((res) => res.json())
    .then((res) => {
      setPostsData(res);
      setReady(prev => !prev);
      setPostNum(0);
    })
  }, []);

  React.useEffect(() => {
    console.log("ready:", ready);
    let temp = postsData.slice(postNum * len, (postNum * len + len));
    setCurrPageData(temp);
  }, [ready, postNum]);

  function showNextPost() {
    if (postNum === Math.ceil(postsData.length / 2) - 1) {
      return;
    }
    setPostNum(prevVal => prevVal + 1);
    console.log(postNum);
    console.log(postsData[postNum]);
  }

  function showPrevPost() {
    if (postNum === 0) {
      return;
    }
    setPostNum(prevVal => prevVal - 1);
    console.log(postNum);
  }

  return (
    <>
      <Header />
      <h3 style={{margin: "20px"}}>Page: {postNum + 1}</h3>
      <div className='posts-container'>
        {currPageData.map((postData) => {
            return <Post key={postData._id} postData={postData} />
        })}
        {/* {ready ? <Post postData={postsData[postNum]} /> : <Post postData={postsData[postNum]} />} */}
        {/* <Post postData={postsData[postNum]} /> */}
        <button className="navigationBtn-prev navBtn" onClick={showPrevPost}>prev</button>
        <button className="navigationBtn-next navBtn" onClick={showNextPost}>next</button>
      </div>
    </>
  );
}

export default PostsPage;
