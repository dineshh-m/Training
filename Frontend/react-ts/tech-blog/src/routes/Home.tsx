import BlogGrid from "../components/BlogGrid";
import SectionContainer from "../components/SectionContainer";
import { blogs } from "../lib/data";

export default function Home() {
  return (
    <>
      <div className="h-[70vh]">
        <SectionContainer>
          <div className="flex justify-between items-center">
            <img src="Blogging.svg" alt="" />
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold mb-4">Hi! I am Dinesh</h2>
              <p className="font-mono">
                I write about Frontend, Backend, Software Engineering,
                JavaScript, Golang, Systems Programming and so on.
              </p>
            </div>
          </div>
        </SectionContainer>
      </div>
      <div className="bg-zinc-100">
        <SectionContainer>
          <h2 id="blogs" className="text-xl font-bold mb-5">
            Read my Blogs
          </h2>
          <BlogGrid blogs={blogs} />
        </SectionContainer>
      </div>
    </>
  );
}
