import { useState } from "react";

export const useMyData = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Etsi puuhakaveria",
    },
    {
      id: "2",
      name: "Hae aktiviteetteja",
    },
    {
      id: "3",
      name: "Tulevat aktiviteetit",
    },
    {
      id: "4",
      name: "Soita asiakaspalveluun",
    },
    {
      id: "5",
      name: "Mitä kuuluu?",
    },
  ]);

  return { data, setData };
};


export const Employees = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Sandra Tossavainen",
      vapaaehtoinen: true,
      image: require("../assets/emoji1.png"),
      työtitteli: "Opiskelija Tarjoilija",
      kielitaito: "Suomi, Ruotsi ja Englanti",
      rating: "3",
    },
    {
      id: "2",
      name: "Sandra Tietäväinen",
      vapaaehtoinen: false,
      image: require("../assets/emoji2.png"),
      työtitteli: "Nuoriso-ohjaaja",
      kielitaito: "Suomi, Venäjä ja Englanti",
      rating: "4",
    },
  ]);

  return { data, setData };
};

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