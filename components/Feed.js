import React from 'react';
import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-col-2 md:max-w-xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        <MiniProfile />
        <Suggestions />
      </section>
    </main>
  );
}

export default Feed;
