
import React from 'react';

const Header = () => {
  const headerStyle = {
    color: 'white',
    fontSize: '30px', // Adjust the desired font size
    fontWeight: 'bold', 
    textAlign: 'center',
  };

  return (
    <div style={headerStyle}>EXPENSE TRACKER</div>
  );
}

export default Header;

