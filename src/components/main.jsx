import { Box, Container, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { useState } from "react";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

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

      <Box py={2} sx={{ height: "90vh", overflowY: "auto", flex: 2 }}>
        <Container maxWidth="90%">
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {selectedCategory}
            <span style={{ color: "red", marginLeft: "10px" }}>videos</span>
          </Typography>
          <Videos />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
