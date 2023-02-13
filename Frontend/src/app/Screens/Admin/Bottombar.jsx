import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const [value, setValue] = React.useState(0);
  let navigate = useNavigate();
  const replace1 = () => {
    let path = `/all-products`;
    navigate(path);
  };
  const replace2 = () => {
    let path = `/add-product`;
    navigate(path);
  };
  const replace3 = () => {
    let path = `/account`;
    navigate(path);
  };
  return (
    <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => {
            replace1();
          }}
        />
        <BottomNavigationAction
          label="Add Items"
          icon={<AddCircleOutlineIcon />}
          onClick={() => {
            replace2();
          }}
        />
        <BottomNavigationAction
          label="Account"
          icon={<PersonIcon />}
          onClick={() => {
            replace3();
          }}
        />
      </BottomNavigation>
    </Box>
  );
};
export default BottomBar;
