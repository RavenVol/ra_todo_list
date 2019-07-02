import React from 'react';

const User = ({user}) => (
  <div className="u-details">
    <h2 className="u-name">{user.name}</h2>
    <p className="u-info"><u>E-mail:</u> {user.email}</p>
    <p className="u-info"><u>Web-Site:</u> {user.website}</p>
    <p className="u-info"><u>Phone:</u> {user.phone}</p>
    <p className="u-info"><u>Address:</u> {user.address.zipcode}, {user.address.city},</p>
    <p className="u-info">{user.address.street} str. {user.address.suite}</p>
  </div>
);

export default User;