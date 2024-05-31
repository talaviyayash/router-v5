import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function About() {
  let id = useParams();
  console.log(id);
  return (
    <>
      <div>About page is here</div>
    </>
  );
}
