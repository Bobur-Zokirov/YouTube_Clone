import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channel }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", sm: "320px", md: "300px" },
        // height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.channelTitle}
            sx={{
              height: "180px",
              width: "180px",
              borderRadius: "50%",
              margin: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography position={"relative"}>
            {channel?.snippet?.channelTitle}{" "}
            <CheckCircle
              sx={{ width: "14px", position: "absolute", right: "-18px" }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
