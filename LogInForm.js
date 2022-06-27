import React from 'react';

import Username from '../component/Username';
import Button from '../component/Button';

function LogInForm() {
  return (
    <>
      <form>
        <div className="container">
          <h1>Login Form</h1>
          <Username />
          <Button />
        </div>
      </form>
    </>
  );
}
export default LogInForm;
