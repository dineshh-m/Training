import { type Blog } from "../lib/data";
import BlogItem from "./BlogItem";

type BlogGridProps = {
  blogs: Blog[];
};

export default function BlogGrid({ blogs }: BlogGridProps) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id}/>
      ))}
    </div>
  );
}
