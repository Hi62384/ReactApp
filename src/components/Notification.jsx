import React, { useEffect, useState } from 'react';

//notification that slides down from the top of the screen, stays for 3 seconds, then slides back up
function Notification({ children, onClose, color = 'gray' }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    //ease in from top in 0.5 seconds
    setVisible(true);

    const timer = setTimeout(() => {
      //after 3000 seconds, wait 0.5 seconds to ease out from top, then call onClose prop function
      setVisible(false);
      setTimeout(onClose, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    position: 'fixed',
    top: visible ? '0px' : '-100px',
    left: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: color,
    color: '#fff',
    padding: '20px',
    fontSize: '32px',
    zIndex: 1000,
    transition: 'top 0.5s ease',
    textShadow: `
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000
  `
  };

  return <div style={containerStyle}>{children}</div>;
};

export default Notification;
