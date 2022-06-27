import React from 'react';

function Username() {
  return (
    <div>
      <label>Email</label>
      <input
        type="text"
        placeholder="enter your username"
        name="username"
        required="true"
      />
      <div>
             <label>Password</label>
        <input type="password" name="password"  placeholder="enter your password" required="true"/>
        </div>
    </div>
  );
}
export default Username;
