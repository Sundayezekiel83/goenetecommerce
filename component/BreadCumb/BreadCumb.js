import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BreadCumb = ({ brand, title, category }) => {
  const router = useRouter();
  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li onClick={() => router.back()}>
            <a>Home</a>
          </li>
          <li onClick={() => router.back()}>
            <a>{category}</a>
          </li>

          <li>
            <a>{brand}</a>
          </li>

          <li>
            <a>{title}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BreadCumb;
