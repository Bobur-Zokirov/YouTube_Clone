import { Box } from "@mui/material";
import { Channel, Main, Navbar, SearchFeed, VideoDetail } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Box sx={{ bgcolor: "#000", color: "white" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default App;
