import React from 'react';
function Simmer() {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <div key={index}  className='res-card m-4 p-4 w-[300px] h-[550px] bg-gray-100 hover:bg-gray-300'>
          {/* Content of each card */}
        </div>
      ))}
    </>
  );
}

export default Simmer;
