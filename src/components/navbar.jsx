import { Box, Stack } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 999,
      }}
    >
      <Link
        className="logo"
        to="/"
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "20px",
          marginLeft: "20px",
        }}
      >
        <img src={logo} alt="logo" height="45px" />
        <Box sx={{ display: { xs: "none", md: "block" } }}>YouTube</Box>
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
