import { View } from "react-native";
import NavBar from "../components/navbar";

export default function Profile() {
  return (
    <View className="flex-1">
      <NavBar
        items={[
          { label: "Explore", link: "/", linkText: "Explore", icon: "compass" },
          {
            label: "Saved",
            link: "/saved",
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
