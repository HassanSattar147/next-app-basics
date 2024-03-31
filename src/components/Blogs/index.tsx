import React from "react";
import Button from "../elements/Button";
import Heading from "../elements/Heading";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs page</h1>
      <Heading />
      <Button text="Homepage" to="/" />

      {[1, 2, 3, 4, 5, 6, 7, 8].map((blogId) => {
        return (
          <div className="my-5" key={blogId}>
            <Button text={"Blog " + blogId} to={"/blogs/" + blogId} />
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
