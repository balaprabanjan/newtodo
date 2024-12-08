import React from 'react';

const Gallery = () => {
  return (
    <>
      <div className="container mx-auto rounded-lg shadow-white shadow-xl bg-black mt-32">
        <div className="mt-40 bg-black flex flex-wrap gap-10 md:flex-col items-center">
          <p className="text-3xl font-extrabold text-white px-6">Snapshots of our website</p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-5 py-10">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/bg3.png" alt="Snap 1" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/gallery2.png" alt="Snap 2" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/gallery3-1.png" alt="Snap 3" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/gallery4-1.png" alt="Snap 4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;