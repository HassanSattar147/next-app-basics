import React from 'react'
import Button from '../elements/Button';

const Blogs = () => {
  return (
    <div>
      <div className="text-[50px] mb-5">Blogs page</div>
      <Button text="Homepage" to="/" />

      {[1, 2, 3, 4, 5, 6, 7, 8].map((blogId) => {
        return (

          <div
          className="my-5"
          key={blogId}
          >
            
            <Button
              text={"Blog " + blogId}
              to={"/blogs/" + blogId}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Blogs