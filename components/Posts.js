import React from 'react';
import Post from './Post';

function Posts() {
  const data = [
    {
      id: 1,
      username: 'admin',
      userImg: 'https://avatars.githubusercontent.com/u/98338078?s=400&v=4',
      img: 'https://avatars.githubusercontent.com/u/98338078?s=400&v=4',
      caption: 'text',
    },
    {
      id: 2,
      username: 'admin',
      userImg: 'https://avatars.githubusercontent.com/u/98338078?s=400&v=4',
      img: 'https://avatars.githubusercontent.com/u/98338078?s=400&v=4',
      caption: 'text',
    },
  ];
  return (
    <div>
      {data.map((obj, i) => (
        <Post key={i} {...obj} />
      ))}
    </div>
  );
}

export default Posts;
