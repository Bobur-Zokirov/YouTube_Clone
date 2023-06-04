import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, action }) => {
  return (
    <Stack
      direction="row"
      sx={{
        px: { sm: 0, md: 1 },
        flexDirection: { md: "column" },
        overflowX: "auto",
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className={"category-btn"}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          onClick={() => action(category.name)}
        >
          <span
            style={{
              padding: "0px",
              color: category.name === selectedCategory ? "white" : "#FC1503",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
