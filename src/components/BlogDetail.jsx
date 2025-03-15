import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom"; // Import useParams

function BlogDetail() {
  const { id } = useParams(); // Extract id from URL params

  const blogs = [
    { id: 1, title: "React Basics", content: "Learn the basics of React including components, state, and props..." },
    { id: 2, title: "Material UI Guide", content: "How to use Material UI with React for a modern UI experience..." },
    { id: 3, title: "Responsive Design", content: "Making your website mobile-friendly using CSS and Material UI..." },
    { id: 4, title: "React Hooks", content: "Understand the power of React hooks and how to use them effectively..." },
    { id: 5, title: "React Router", content: "A deep dive into React Router for navigation and routing..." },
  ];

  const blog = blogs.find((b) => b.id === parseInt(id)); // Convert id to number

  if (!blog) return <Typography variant="h5">Blog not found</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {blog.title}
      </Typography>
      <Typography variant="body1">{blog.content}</Typography>
    </Container>
  );
}

export default BlogDetail;




