import { CheckCircle } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: "320px",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{ width: "360px", height: "180px" }}
      />
      <CardContent
        sx={{ bgcolor: "#b1acac", height: "180px", position: "relative" }}
      >
        <>
          <Typography
            sx={{
              mx: "5px",
              opacity: "0.6",
              fontSize: "14px",
            }}
          >
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </>
        <Stack
          direction={"row"}
          position={"absolute"}
          bottom={"10px"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <Typography variant="subtitle2" color={"#000"}>
            {video?.snippet?.channelTitle}
          </Typography>
          <CheckCircle sx={{ fontSize: "12px", color: "#000", ml: "5px" }} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
