import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/something1">Something Report</Link>
        </li>
        <li>
          <Link href="/news/something12">Something Report 12</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
