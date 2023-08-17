import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
} from "./controller.js";

const blogRouter = Router();

blogRouter.get("/", getBlogs);
blogRouter.post("/", createBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
