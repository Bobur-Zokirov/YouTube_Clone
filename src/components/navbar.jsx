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
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height="45px" />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
