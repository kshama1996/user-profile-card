import React from 'react';

const UserProfile= ({render,userData}) =>{ 
  return  (<div>{render(userData)}</div>)
}

export default UserProfile