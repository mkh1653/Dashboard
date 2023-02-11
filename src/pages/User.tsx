import React from "react";
import { useParams } from "react-router-dom";

const User: React.FC = () => {
  let { slug } = useParams();

  return <div>hi {slug}</div>;
};

export default User;
