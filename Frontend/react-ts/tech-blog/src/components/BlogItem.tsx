import { type Blog } from "../lib/data";
import { getReadableDate } from "../lib/util";
import { Link } from "react-router-dom";

type BlogItemProps = {
  blog: Blog;
};

export default function BlogItem({ blog }: BlogItemProps) {
  const { id, title, imgPath, description, publishedDate, tags } = blog;
  return (
    <Link
      to={`/blog/${id}`}
      className="bg-neutral-200 rounded hover:scale-105 transition-all duration-75 ease-linear"
    >
      <img src={imgPath} className="rounded-lg" alt="" />
      <div className="p-3">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-neutral-600">{description}</p>
        <p className="text-sm text-neutral-500">
          {getReadableDate(publishedDate)}
        </p>
        <ul className="flex gap-2 mt-2">
          {tags.map((tag) => (
            <li
              className="rounded-lg bg-sky-500 text-white font-bold text-sm px-1"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
