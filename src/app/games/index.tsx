import { View } from "react-native";
import NavBar from "../components/navbar";

export default function Games() {
  return (
    <View className="flex-1">
      <NavBar
        items={[
          { label: "Explore", link: "/", linkText: "Explore", icon: "compass" },
          {
            label: "Spots",
            link: "/games",
            linkText: "Spots",
            icon: "search",
          },
          {
            label: "Map",
            link: "/venues",
            linkText: "Map",
            icon: "map",
          },
          {
            label: "Saved",
            link: "/messages",
            linkText: "Saved",
            icon: "bookmark",
          },
          {
            label: "Profile",
            link: "/profile",
            linkText: "Profile",
            icon: "user",
          },
        ]}
      />
    </View>
  );
}
