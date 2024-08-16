import Articles from "@/app/(main)/articles/page";
import Link from "next/link";
import React from "react";

export default async function ArticlePage({ params }) {
  const { slug } = params;

  let article = await fetch(`https://dev.to/api/articles/apped/${slug}`);
  article = await article.json();
  return (
    <div>
      <div>
        <h1 className=" text-4xl underline">{article.title}</h1>
        <div
          className="container mt-4"
          dangerouslySetInnerHTML={{ __html: article.body_html }}
        ></div>
      </div>
      <div>
        {/* <Articles/> */}
        <Link href="/articles" className=" p-4 mt-10  ">
          Back to articles
        </Link>
      </div>
    </div>
  );
}
