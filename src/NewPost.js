import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const NewPost = () => {
  
  const posts = useStoreState((state) => state.posts);
 
  const postTitle = useStoreState((state) => state.postTitle);
  const setPostTitle = useStoreActions((action) => action.setPostTitle);
 
  const postBody = useStoreState((state) => state.postBody);
  const setPostBody = useStoreActions((action) => action.setPostBody);
 
  const savePost = useStoreActions((action) => action.savePost);
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id: id,
      title: postTitle,
      datetime: datetime,
      body: postBody
    };
    savePost(newPost);
    navigate('/');
  }


  return (
    <main className="NewPost">
        <h2>New Post</h2>
        <form 
          className="newPostForm"
          onSubmit={handleSubmit}
          >
            <label htmlFor="postTitle">Title</label>
            <input 
              id="postTitle"
              type="text"
              required
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea 
              id="postBody"
              required
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)} 
            />
            <button
              type="submit"
            >
              Submit
            </button>
        </form>
    </main>
  )
}

export default NewPost
