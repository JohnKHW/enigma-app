import { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@mui/material";

type Shop = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

const ShopList = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    // Fetch the shops from an API or any other data source
    const fetchedShops: Shop[] = [
      { id: 1, name: "Shop A", latitude: 37.7749, longitude: -122.4194 },
      { id: 2, name: "Shop B", latitude: 38.7749, longitude: -122.4184 },
      { id: 3, name: "Shop C", latitude: 39.7759, longitude: -122.4194 },
      { id: 4, name: "Shop D", latitude: 39.7739, longitude: -121.4194 },
      { id: 5, name: "Shop E", latitude: 39.7739, longitude: -122.4194 },
      { id: 6, name: "Shop F", latitude: 39.7739, longitude: -122.4194 },
      { id: 7, name: "Shop G", latitude: 37.7739, longitude: -132.4194 },
    ];
    setShops(fetchedShops);
  }, []);

  // Calculate the distance between two points using the Haversine formula
  const distance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const p = 0.017453292519943295; // Math.PI / 180
    const c = Math.cos;
    const a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  };

  return (
    <List>
      {shops.map((shop) => (
        <ListItem key={shop.id}>
          <ListItemText
            primary={shop.name}
            secondary={`${distance(
              37.7749, // User's latitude
              -122.4194, // User's longitude
              shop.latitude,
              shop.longitude
            ).toFixed(2)} km`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ShopList;
