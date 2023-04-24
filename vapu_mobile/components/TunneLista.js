import { useState } from "react";

export const Tunnetilat = () => {
  const [data, setData] = useState([
    { id: "1", mood: "Surullinen", image: require("../assets/pensive.png")},
    { id: "2", mood: "Kipeä", image: require("../assets/sick.png")},
    { id: "3", mood: "Ahdistaa", image: require("../assets/anxious.png")},
    { id: "4", mood: "Voimaton", image: require("../assets/powerless.png")},
    { id: "5", mood: "Väsynyt", image: require("../assets/tired.png")},
    { id: "6", mood: "Vihainen", image: require("../assets/angry.png")},
    { id: "7", mood: "Iloinen", image: require("../assets/happy.png") },
  ]);

  return { data, setData };
};