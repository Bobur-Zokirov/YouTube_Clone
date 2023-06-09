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
import { Link } from "react-router-dom";
import { demoProfilePicture, demoThumbnailUrl } from "../utils/constants";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "320px", md: "300px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={video?.id?.videoId && `/video/${video?.id?.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={video?.snippet?.title}
          sx={{
            width: { xs: "105%", sm: "320px", md: "320px" },
            height: "180px",
            padding: 0,
          }}
        />
      </Link>
      <CardContent
        sx={{
          bgcolor: "#1e1e1e",
          color: "whitesmoke",
          height: "106px",
          position: "relative",
        }}
      >
        <>
          <Typography
            sx={{
              opacity: "0.8",
              fontSize: "14px",
            }}
          >
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Link to={video?.id?.videoId && `/video/${video?.id?.videoId}`}>
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              color="whitesmoke"
            >
              {video?.snippet?.title.slice(0, 50)}
            </Typography>
          </Link>
        </>
        <Link
          to={
            video?.snippet?.channelId && `/channel/${video?.snippet?.channelId}`
          }
        >
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar
              src={video?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            />
            <Typography variant="subtitle2" color={"#e3e3e3"} opacity="0.6">
              {video?.snippet?.channelTitle}
            </Typography>
            <CheckCircle
              sx={{
                fontSize: "10px",
                color: "gray",
                ml: "5px",
                // position: "absolute",
                // right: "-12px",
                // top: "5px",
              }}
            />
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
