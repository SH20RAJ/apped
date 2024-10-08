import Link from "next/link";

export default async function Articles() {

  let articles = await fetch("https://dev.to/api/articles/latest?username=apped&per_page="+Math.random()*500);
  articles = await articles.json()

  return (
    <div className=" container mx-auto mt-4">
      <h1 className=" p-4 text-4xl">Articles</h1>
      {/* <ul>
        {article.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </ul> */}
      <ul>
        {articles.map((article, index) => (
          <ArticleCard2 key={index} article={article} />
        ))}
      </ul>
    </div>
  );
}

let ArticleCard = ({ article }) => {
  return (
    <div className="card w-full shadow-lg p-8 text-lg">
      <h3 className=" bold underline">{article.title}</h3>
      <p>{article.description}</p>
    </div>
  );
};

let ArticleCard2 = ({ article }) => {
  return (
    <div className="card w-full shadow-lg p-8 text-lg">
      <Link href={'/article/'+article.path.split("/").pop()}><h3 className=" bold underline">{article.title}</h3></Link>
      <p>{article.description}</p>
    </div>
  );
};

