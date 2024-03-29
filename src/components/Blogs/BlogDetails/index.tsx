"use client";

import Button from "@/components/elements/Button";
import { useParams } from "next/navigation";
import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <div>Blog Details Page for blog id: {useParams().blog_id}</div>
      <Button text="Blogs Page" to="/blogs" />
    </div>
  );
};

export default BlogDetails;
