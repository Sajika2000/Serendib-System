import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import moment from "moment";

const NewsCard = ({ data }) => {
  const handleCardClick = () => {
    if (data.url) {
      window.open(data.url, "_blank");
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: 3,
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <CardContent sx={{ padding: 1.5 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: 0, fontSize: "1rem" }}
        >
          {data.title}
        </Typography>
      </CardContent>

      <CardContent sx={{ padding: 1.5 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 0, fontSize: "1rem", fontWeight: "600" }}
        >
          By {data.author ? data.author : "Unknown Author"} - {data.source.name}
        </Typography>
      </CardContent>

      <CardContent sx={{ padding: 1.5 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 1, fontSize: "0.875rem" }}
        >
          {moment(data.publishedAt).format("DD MMM YYYY")}
        </Typography>
      </CardContent>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 1.5,
          alignItems: "flex-start",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200, height: "auto", objectFit: "cover", flexShrink: 0 }}
          image={
            data.urlToImage ||
            "https://media.gettyimages.com/id/1339466666/vector/breaking-news.jpg?s=1024x1024&w=gi&k=20&c=_0mfQVY0OP34F7CiyMeznEvy5xGu5ppYTjn_EPbxwWU="
          }
          alt={data.title}
        />

        <CardContent
          sx={{ flex: 1, paddingLeft: 2, paddingRight: 2, marginBottom: 0 }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: "600" }}
          >
            {data.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default NewsCard;
