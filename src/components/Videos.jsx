import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  // console.log(videos);
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      mx={"auto"}
      gap={2}
    >
      {videos.map((video) => (
        <Box key={video.id.videoId}>
          {video.id.videoId && <VideoCard video={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
