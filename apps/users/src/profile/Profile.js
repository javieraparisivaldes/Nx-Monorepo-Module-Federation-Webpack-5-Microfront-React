import React from "libs/react";
import { useHistory } from "libs/react-router-dom";
import "../app/app.style"
import { Input } from "@dipjaen/ui"

const Profile = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (<div>
      Maps v 1.0 <Input/>
      <button onClick={handleClick}>from remote5: GO HOME</button>
    </div>);
};

export default Profile;
