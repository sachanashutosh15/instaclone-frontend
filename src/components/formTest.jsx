import React from 'react';
import axios from 'axios';

const FormTest = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    postImage: null,
    imgName: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataNew = new FormData(document.getElementById('form'));
    formDataNew.append('imageName', document.getElementById('file').value);
    // formDataNew.append('name', formData.name);
    // formDataNew.append('postImage', formData.postImage);
    // formDataNew.append('imageName', document.getElementById('file').value);
    await axios.post(
      'http://localhost:5000/post',
      formDataNew,
      { 'content-type': 'multipart/form-data'},
    );
    console.log(formDataNew);
  }

  const fileSelectHandler = (event) => {
    let file = event.target.files[0];
    setFormData({
      postImage: file,
      imgName: document.getElementById('file').value,
    })
    console.log(file.name);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({...prevFormData, [name]: value}))
  }

  return (
    <>
      <form id='form' encType='multipart/form-data' onSubmit={handleSubmit}>
        <input
          type='file'
          name='postImage'
          id='file'
          onChange={fileSelectHandler}
        />
        <input
          type='text'
          name='name'
          id='userName'
          onChange={handleChange}
        />
        <input type='submit' />
      </form>
    </>
  );
}

export default FormTest;