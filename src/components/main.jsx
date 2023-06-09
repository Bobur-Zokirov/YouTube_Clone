import { Box, Container, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { useEffect, useState } from "react";
import ApiService from "../services/api.service";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
      }}
      spacing={2}
    >
      <Box
        sx={{
          borderRight: "2px solid #3d3d3d",
          borderBottom: { sm: "1px solid #3d3d3d" },
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          action={setSelectedCategory}
        />
        <Typography className="copyright">Copyright Media 2023</Typography>
      </Box>

      <Box
        pt={2}
        sx={{
          height: "100vh",
          overflowY: "auto",
          flex: 2,
        }}
      >
        <Container maxWidth="90%">
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {selectedCategory}
            <span style={{ color: "red", marginLeft: "10px" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
