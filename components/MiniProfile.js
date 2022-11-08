import React from 'react';

function MiniProfile() {
  return (
    <div>
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src="https://avatars.githubusercontent.com/u/98338078?s=400&v=4"
        alt="user avatar"
      />

      <div>
        <h2>my Profile</h2>
        <h3>Hello World</h3>
      </div>
    </div>
  );
}

export default MiniProfile;
