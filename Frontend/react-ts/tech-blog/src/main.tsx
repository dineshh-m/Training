import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import Home from "./routes/Home.tsx";
import BlogPage, { loader as blogPageLoader } from "./routes/Blog.tsx";
import Projects from "./routes/Projects.tsx";
import About from "./routes/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogPage />,
        loader: blogPageLoader, 
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/about",
        element: <About /> 
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
