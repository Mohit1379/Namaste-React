import React from 'react';

function Simmer() {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <div key={index} className='res-card' style={{ backgroundColor: "#f0f0f0", width: "280px", height: "448px" }}>
          {/* Content of each card */}
        </div>
      ))}
    </>
  );
}

export default Simmer;
