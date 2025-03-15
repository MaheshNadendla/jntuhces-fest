import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button, Card, CardContent, Grid } from "@mui/material";

const blogs = [
  { id: 1, title: "React Basics", content: "Learn the basics of React including components, state, and props..." },
  { id: 2, title: "Material UI Guide", content: "How to use Material UI with React for a modern UI experience..." },
  { id: 3, title: "Responsive Design", content: "Making your website mobile-friendly using CSS and Material UI..." },
  { id: 4, title: "React Hooks", content: "Understand the power of React hooks and how to use them effectively..." },
  { id: 5, title: "React Router", content: "A deep dive into React Router for navigation and routing..." },
];

const Home = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Latest Blogs</Typography>
    <Grid container spacing={3}>
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={4} key={blog.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{blog.title}</Typography>
              <Typography variant="body2">{blog.content.substring(0, 50)}...</Typography>
              <Button component={Link} to={`/blog/${blog.id}`} variant="contained" color="primary" style={{ marginTop: 10 }}>
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

const BlogDetail = ({ id }) => {
  const blog = blogs.find((b) => b.id === parseInt(id));
  if (!blog) return <Typography variant="h5">Blog not found</Typography>;
  return (
    <Container>
      <Typography variant="h4" gutterBottom>{blog.title}</Typography>
      <Typography variant="body1">{blog.content}</Typography>
    </Container>
  );
};

const About = () => (
  <Container>
    <Typography variant="h4" gutterBottom>About Us</Typography>
    <Typography variant="body1">Welcome to our blog website. We share knowledge about web development, React, and modern UI frameworks.</Typography>
  </Container>
);

const Contact = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Contact Us</Typography>
    <Typography variant="body1">For any inquiries, reach out to us at contact@blogwebsite.com.</Typography>
  </Container>
);

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>Blog Website</Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/:id" element={<BlogDetailWrapper />} />
    </Routes>
  </Router>
);

const BlogDetailWrapper = () => {
  const { id } = useParams();
  return <BlogDetail id={id} />;
};

export default App;
