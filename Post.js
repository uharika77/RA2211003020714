import React from "react";

function Post({ title, body }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{body}</p>
    </div>
  );
}

export default Post;
