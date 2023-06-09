import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

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
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
