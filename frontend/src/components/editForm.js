import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../redux/ducks/posts';

const EditForm = (props) => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts)

  const onChangeHandler = (text) => {
    if(props.title.indexOf(text) !== -1){
      props.setTitle(text);
      return
    }
    props.setTitle(text);
    let match = [];
    if(text.length > 5){
        match = posts.filter(dt => {
          return dt.title.includes(text)
        })
     }
     if(match.length){
      props.setTitle(match[0].title);
      props.setPostBody(match[0].body)
     }
  };

  const handleSubmit = (edits) => {
    dispatch(editPost(edits));
    props.setTrigger(false)
  };

  return (props.trigger) ? (
    <div className='popup'>
      <div className='inner'>
        <form>
          <label className='edit-title-tag'>Title:</label>
          <input type='text' className='edit-post-title' value={props.title} maxLength='200'
          onChange={(e) => {e.preventDefault(); onChangeHandler(e.target.value)}}/>
          <div>
          <textarea className='edit-post-body' maxLength='2000' value={props.postBody} onChange={(e) => props.setPostBody(e.target.value)}></textarea>
          </div>
          <button className='close-btn'
          onClick={() => {props.setTrigger(false); props.setTitle(props.post.title); props.setPostBody(props.post.body)}}>Cancel</button>
          <button id='submit-btn' onClick={(e) => { e.preventDefault(); handleSubmit({id: props.post.id, title:props.title, body:props.postBody})}}>Submit</button>
        </form>
      </div>
    </div>
  ): '';
}

export default EditForm;