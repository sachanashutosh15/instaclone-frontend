import axios from 'axios';
import React from 'react';
import Header from './header';
import {
  useNavigate,
} from 'react-router-dom';

const CreateNewPost = () => {
  return(
    <>
      <Header />
      <div className='render-form'>
        <Form />
      </div>
    </>
  );
}


const Form = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = React.useState({
    imageName: '',
    author: '',
    location: '',
    description: '',
    postImage: null,
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setPostData(prevPostData => ({...prevPostData, [name]: value}));
  }

  const handleUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const { name, value } = event.target;
    console.log(value);
    setPostData(prevPostData => ({
      ...prevPostData,
      [name]: value,
      postImage: file,
    }))
    console.log(postData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imageName', postData.imageName);
    formData.append('author', postData.author);
    formData.append('location', postData.location);
    formData.append('description', postData.description);
    formData.append('postImage', postData.postImage);
    // const data = await fetch ('http://localhost:5000/post', {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     "Content-type": "multipart/form-data",
    //   }
    // }) 
    await axios.post(
      'https://instaclone-server-ashutosh.herokuapp.com/post',
      formData,
      { 'content-type': 'multipart/form-data' },
    )
    setPostData({
      imageName: '',
      author: '',
      location: '',
      description: '',
      postImage: null,
    });
    document.getElementById('image-input').value = '';
    navigate('/posts');
  }

  return (
    <div className='form-container'>
      <form className='form' encType='multipart/form-data' onSubmit={handleSubmit}>
        <div className='image-name'>
          <input
            type='file'
            autoComplete='off'
            id='image-input'
            onChange={handleUpload}
            name='imageName'
            // value={postData.imageName}
          />
        </div>
        <div className='author-location'>
          <input
            type='text'
            placeholder='Author'
            autoComplete='off'
            onChange={handleChange}
            name='author'
            value={postData.author}
          />
          <input
            type='text'
            placeholder='Location'
            autoComplete='off'
            onChange={handleChange}
            name='location'
            value={postData.location}
          />
        </div>
        <div className='description-button'>
          <input
            type='text'
            placeholder='Description'
            autoComplete='off'
            onChange={handleChange}
            name='description'
            value={postData.description}
          />
          <button className='submit-button' type='submit'>Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewPost;
