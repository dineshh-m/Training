export type Blog = {
  id: string;
  title: string;
  description: string;
  content: string;
  publishedDate: number;
  tags: string[];
  imgPath: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
};

function getSlug(str: string) {
  return str.split(" ").join("-").toLowerCase();
}

export const blogs: Blog[] = [
  {
    id: getSlug("How JavaScript Event Loop works"),
    title: "How JavaScript Event Loop works",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
  {
    id: getSlug("What is SystemD"),
    title: "What is SystemD",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
  {
    id: getSlug("How to write a blog using nextjs"),
    title: "How to write a blog using nextjs",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
  {
    id: getSlug("What is Dependency Injection"),
    title: "What is Dependency Injection",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
  {
    id: getSlug("How to build real time apps using websockets"),
    title: "How to build real time apps using websockets",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
  {
    id: getSlug("How to write a cron job in linux"),
    title: "How to write a cron job in linux",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
  {
    id: getSlug("How React reconciliation works"),
    title: "How React reconciliation works",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
  {
    id: getSlug("How to contribute to open source"),
    title: "How to contribute to open source",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
  {
    id: getSlug("How to build RAG apps with vector databases"),
    title: "How to build RAG apps with vector databases",
    description:
      "Dive into the internals of Event loop and how it is implemented",
    content: "...",
    publishedDate: Date.now(),
    tags: ["JavaScript", "Node.js"],
    imgPath:
      "https://cdn-images-1.medium.com/max/400/1*iIxEBzgYTiqc6J2lkA2lSQ.gif",
  },
];

export const projects: Project[] = [
  {
    id: "a",
    title: "Aurora",
    description: "A Minimal code editor written in Java.",
  },
  {
    id: "b",
    title: "Assist AI",
    description:
      "An intuitive chatbot built to help people with government schemes.",
  },
  {
    id: "c",
    title: "Downtown",
    description: "A markdown editor built using React, TypeScript and Vite.",
  },
];
