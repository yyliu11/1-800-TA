import React, { useState } from 'react';
import '../App.css';
import EditForm from './editForm';

const PostList = (props) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  return (
    <div className='post'>
      <span id='post-title'>{props.post.title}</span>
      <span className='edit'
      onClick={(e) => {e.preventDefault(); setEdit(true); setTitle(props.post.title);
        setPostBody(props.post.body)}}>Edit
      </span>
      <EditForm trigger = {edit} setTrigger = {setEdit} post = {props.post}
      title={title} setTitle={setTitle} postBody={postBody} setPostBody={setPostBody}>
      </EditForm>
      <div id='post-body'>{props.post.body}</div>
    </div>
  )
}

export default PostList;