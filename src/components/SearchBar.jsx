import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        px: 2,
        py: 0.5,
        borderRadius: "25px",
      }}
    >
      <input type="text" placeholder="Search" className="search-bar" />
      <IconButton type="submit" sx={{ color: "#FC1503" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
