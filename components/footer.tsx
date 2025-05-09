import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; 2025 Coste Ionut Petru. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this Website:</span> Built with React.js & Next.js (App Router), Typescript, Tailwind CSS, Framer Motion, and Hosting on Vercel.
      </p>
    </footer>
  );
}
