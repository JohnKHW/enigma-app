import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
interface IProps {
  pageIdx: number;
  setPageIdx: (idx: number) => void;
}

export const Footer = (props: IProps) => {
  const { pageIdx, setPageIdx } = props;
  const [value, setValue] = React.useState(pageIdx);

  React.useEffect(() => {
    setPageIdx(value);
  }, [setPageIdx, value]);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: 0,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
      component="footer"
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="History" icon={<HistoryIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
};
