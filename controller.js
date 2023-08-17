import blogModel from "./blogModel.js";

const getBlogs = async (req, res) => {
  try {
    let allBlogs = await blogModel.find();
    return res.status(200).json(allBlogs);
  } catch (error) {
    console.error(`Error getting blogs: ${error}`);
    res.status(500).json({ error: "Error getting blogs" });
  }
};

const getBlogById = async (req, res) => {
  let id = req.params.id;
  try {
    let blog = await blogModel.find({ _id: id });
    return res.status(200).json(blog);
  } catch (error) {
    console.error(`Error getting blog: ${error}`);
    res.status(500).json({ error: "Error getting blog" });
  }
};

const createBlog = async (req, res) => {
  let data = req.body;
  try {
    let blog = new blogModel(data);
    const uploadedBlog = await blog.save();
    return res.status(201).json(uploadedBlog);
  } catch (error) {
    console.error(`Error creating blog: ${error}`);
    res.status(500).json({ error: `Error creating blog : ${error}` });
  }
};

const updateBlog = async (req, res) => {
  let filter = { _id: req.params.id };
  let data = req.body;
  try {
    const updatedBlog = await blogModel.findOneAndUpdate(filter, data, {
      new: true,
    });
    return res.status(200).send(updatedBlog);
  } catch (error) {
    console.error(`Error updating blog: ${error}`);
    res.status(500).json({ error: "Error updating blog" });
  }
};

const deleteBlog = async (req, res) => {
  let id = req.params.id;
  try {
    await blogModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.error(`Error deleting blog: ${error}`);
    res.status(500).json({ error: "Error deleting blog" });
  }
};

export { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
