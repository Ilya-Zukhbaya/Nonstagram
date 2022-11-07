import React from 'react';
import Stories from './Stories';

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-col-2 md:max-w-xl xl:grid-cols-3 xl:max-w-6xl max-auto">
      <section className="col-span-2">
        <Stories />
      </section>

      <section></section>
    </main>
  );
}

export default Feed;
