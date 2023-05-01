import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="w-100 my-2" variant="outline-primary">
        <FaGoogle />
        Login with Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        <FaGithub />
        Login with Github
      </Button>
    </div>
  );
};

export default RightNav;
