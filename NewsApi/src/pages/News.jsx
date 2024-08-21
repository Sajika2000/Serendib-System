import { useEffect, useState } from "react";
import NewsCard from "../component/NewsCard";
import { Grid, Button, CircularProgress, Box } from "@mui/material";

const News = () => {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=b127afeccfa14a93ab40c30c77dda059"
      );
      const json = await response.json();

      const sortedNews = json.articles.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      setNews(sortedNews);
      if (sortedNews.length <= visibleCount) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  const loadMoreNews = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 6;
      if (newCount >= news.length) {
        setHasMore(false);
      }
      return newCount;
    });
  };

  const showLessNews = () => {
    setVisibleCount((prevCount) => {
      const newCount = Math.max(prevCount - 6, 6);
      if (newCount < news.length) {
        setHasMore(true);
      }
      return newCount;
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h1 className="text-[#00317F] text-3xl font-bold text-center text-[5rem] mb-[5rem] mt-10">
        {" "}
        Latest News
      </h1>

      <Grid container spacing={3}>
        {news.slice(0, visibleCount).map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard data={data} />
          </Grid>
        ))}
      </Grid>
      {loading && (
        <CircularProgress
          sx={{ display: "block", margin: "auto", marginTop: 2 }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          {hasMore && !loading && (
            <Button
              variant="contained"
              onClick={loadMoreNews}
              sx={{
                backgroundColor: "#00317F",
                height: 40,
                width: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#002060",
                },
              }}
            >
              + More
            </Button>
          )}
          {visibleCount > 6 && (
            <Button
              variant="contained"
              onClick={showLessNews}
              sx={{
                backgroundColor: "#00317F",
                height: 40,
                width: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#002060",
                },
              }}
            >
              - Less
            </Button>
          )}
        </Box>
        {!hasMore && !loading && <p>No more news to show</p>}
      </Box>
    </Box>
  );
};

export default News;
