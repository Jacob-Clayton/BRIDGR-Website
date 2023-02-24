import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {loading ? (
        <div
          className="absolute flex flex-col justify-center items-center"
          style={{ backgroundColor: '#1633a4', height: '100vh', width: '100vw' }}
        >
            <h2 className="text-center text-white text-2xl font-bold mx-auto">Loading...</h2>
        </div>
      ) : (
        <main className="flex-1">{children}</main>
      )}
    </div>
  );
};

export default Loading;
