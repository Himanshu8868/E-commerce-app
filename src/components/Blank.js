import React from 'react';

const Blank = () => {
    const containerStyle = {
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '34.5vh',   
    }
    const textStyle = {
        color:'white',
        fontSize: '24px',
        fontWeight: 'bold'
    }
  return (
    <div style={containerStyle}>
      <div className="d-flex blank-style">
        <h1 style={textStyle}>Sorry! Currently Working on This Page</h1>
      </div>
    </div>
  );
};

export default Blank;