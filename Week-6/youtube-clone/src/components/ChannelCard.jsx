import { Box, CardContent, Typography, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: { xs: "350px", md: "320px" },
      height: "320px",
      margin: "auto",
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#fff" }}
      >
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: "50%", width: "1808px", height: "10px", mb: 2, border: "1px solid #e3e3e3 " }}
        />
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </Typography>
        {channelDetail?.statistic.subscriberCount && (
          <Typography>{parseInt(channelDetail?.statistic?.subscriberCount).toLocaleString()} subscribers</Typography>
        )}
        Subscribers
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
