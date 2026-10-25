import { View } from "react-native";
import Card from "./components/cards";
import NavBar from "./components/navbar";
export default function Home() {
  return (
    <View className="flex-1 bg-slate-50 px-4 pt-16">
      <Card
        label="Tonight"
        header="5-a-side at Shoreditch Park"
        subHeader="Tuesday, 7:30 PM - Shoreditch"
        spots={3}
        profilePic="https://i.pravatar.cc/100?img=12"
        profileName="Alex Morgan"
        price={8}
      />
      <NavBar
        items={[
          {
            label: "Explore",
            link: "/",
            linkText: "Explore",
            icon: "compass",
          },
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
