import React from "react";
import { CLASSNAME } from "const/ClassInfo";
import { Link } from "react-router-dom";

const ClassInfo = () => {
  return (
    <Link
      to={{
        pathname: `/`,
      }}
    >
      <div id="logoLink">
        <span className="logo">
          <span className="logoWork">Class</span>
          Work
        </span>
        <div className="className">{CLASSNAME}</div>
      </div>
    </Link>
  );
};

export default ClassInfo;
