import React from "react";
import New from "/public/images/earth.png";
import Image5 from "/public/images/image4.png";
import Image6 from "/public/images/image5.png";
import Image4 from "/public/images/image6.png";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";

const articles = [
  {
    title: "Breaking Barriers: Advancements in Nursing Practice",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris...",
    postedDate: "18 August 2023",
    image: Image5,
  },
  {
    title: "Nursing Education Unleashed: From Classroom to Clinicals",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris...",
    postedDate: "18 August 2023",
    image: Image4,
  },
  {
    title: "Nurse's Notebook: A Journey through Nursing Education",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris...",
    postedDate: "18 August 2023",
    image: Image6,
  },
];

const News = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 10 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, color: "black" }}
        >
          News, Blogs, and Beyond
        </Typography>
        <Typography variant="h6" sx={{ color: "black" }}>
          Your Source for Updates & Articles
        </Typography>
      </Box>

      {/* Featured Article Section */}
      <Grid container spacing={4} sx={{ mb: 10 }}>
        <Grid item xs={12} md={5}>
          <Image
            src={New}
            alt="Featured Article"
            style={{
              borderRadius: "8px",
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Box sx={{ py: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 4, color: "black" }}
            >
              Nurse Leadership: Paving the Way for Change in Healthcare
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "black" }}>
              Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at
              pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est
              laoreet pharetra ultricies mauris. Senectus aliquam sodales massa
              vitae velit. Cras ultricies ac ultricies pellentesque ligula amet
              ultricies. Tristique porttitor pulvinar id et pellentesque aliquam
              nunc. Egestas felis ultrices quam dui mollis cras. Id vestibulum
              urna amet morbi ornare. Dictum tristique elementum lobortis
              posuere diam tincidunt dui...
            </Typography>
            <Typography variant="body2" sx={{ color: "teal", color: "black" }}>
              Posted date: 18 August 2023
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Article Grid */}
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ borderRadius: 2, overflow: "hidden" }}>
              <Image
                src={article.image}
                alt={article.title}
                style={{ objectFit: "cover", width: "100%", height: "200px" }}
              />
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 2, color: "black" }}
                >
                  {article.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "black" }}>
                  {article.description}
                </Typography>
                <Typography variant="body2" sx={{ color: "teal" }}>
                  Posted date: {article.postedDate}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
