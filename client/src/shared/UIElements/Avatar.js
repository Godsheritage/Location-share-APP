import React from 'react';

import './Avatar.css';

const Avatar = ({infos}) => {
  return (
    <div className={`avatar ${infos.className}`} style={infos.style}>
      <img
        src={infos.image}
        alt={infos.alt}
        style={{ width: infos.width, height: infos.width }}
      />
    </div>
  );
};

export default Avatar;
