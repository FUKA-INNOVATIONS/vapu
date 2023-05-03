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

export const Milloin = () => {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Tänään",
    },
    {
      id: "2",
      name: "Huomenna",
    },
    {
      id: "3",
      name: "Kalenteri",
    },
  ]);

  return { data, setData };
};

export const Ajat = () => {
  const [time, setTime] = useState([
    {
      id: "1",
      aika: "8:00",
    },
    {
      id: "2",
      aika: "9:00",
    },
    {
      id: "3",
      aika: "10:00",
    },
    {
      id: "4",
      aika: "11:00",
    },
    {
      id: "5",
      aika: "12:00",
    },
    {
      id: "6",
      aika: "13:00",
    },
    {
      id: "7",
      aika: "14:00",
    },
    {
      id: "8",
      aika: "15:00",
    },
    {
      id: "9",
      aika: "16:00",
    }, 
    {
      id: "10",
      aika: "17:00",
    },
    {
      id: "11",
      aika: "18:00",
    },
    {
      id: "12",
      aika: "19:00",
    },
  ]);

  return { time, setTime };
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


  export const Aktiviteetit = () => {
    const [data, setData] = useState([
      {
        id: "1",
        name: "Puistoon",
        image: require("../assets/aktiviteetit/puistoon.png"),
      },
      {
        id: "2",
        name: "Kahville",
        image: require("../assets/aktiviteetit/kahville.png"),
      },
      {
        id: "3",
        name: "Rannalle",
        image: require("../assets/aktiviteetit/rannalle.png"),
      },
      {
        id: "4",
        name: "Kauppaan",
        image: require("../assets/aktiviteetit/kauppaan.png"),
      },
      {
        id: "5",
        name: "Kampaamo",
        image: require("../assets/aktiviteetit/kampaamoon.png"),
      },
      {
        id: "6",
        name: "Lasilliselle",
        image: require("../assets/aktiviteetit/lasilliselle.png"),
      },
      {
        id: "7",
        name: "Pizzalle",
        image: require("../assets/aktiviteetit/pizzalle.png"),
      },
      {
        id: "8",
        name: "Kävelylle",
        image: require("../assets/aktiviteetit/kävelylle.png"),
      },
      {
        id: "9",
        name: "Jäätelölle",
        image: require("../assets/aktiviteetit/jäätelölle.png"),
      },
      {
        id: "10",
        name: "Digimaailma",
        image: require("../assets/aktiviteetit/digimaailma.png"),
      },
      {
        id: "11",
        name: "Lauletaan",
        image: require("../assets/aktiviteetit/lauletaan.png"),
      },
      {
        id: "12",
        name: "Bingoa",
        image: require("../assets/aktiviteetit/bingoa.png"),
      },
      {
        id: "13",
        name: "Palapeliä",
        image: require("../assets/aktiviteetit/palapeliä.png"),
      },
      {
        id: "14",
        name: "Tanssitaan",
        image: require("../assets/aktiviteetit/tanssitaan.png"),
      },
    ]);
  
    return { data, setData };
  };

  export const Paikat = () => {
    const [data, setData] = useState([
      {
        id: "1",
        name: "Eläintarha",
        image: require("../assets/paikat/eläintarha.png"),
        address: "Ehrenströmintie 3, Helsinki",
        description: "Lorem ipsum on 1500-luvulta lähtien olemassa ollut teksti, jota käytetään usein täysa. Jota käytetään usein täysa jota käytetään usein."
      },
      {
        id: "2",
        name: "Huvipuisto",
        image: require("../assets/paikat/huvipuisto.png"),
        address: "Ehrenströmintie 3, Helsinki",
        description: "Lorem ipsum on 1500-luvulta lähtien olemassa ollut teksti, jota käytetään usein täysa. Jota käytetään usein täysa jota käytetään usein."
      },
      {
        id: "3",
        name: "Puistoon kävely",
        image: require("../assets/paikat/puisto.png"),
        address: "Ehrenströmintie 3, Helsinki",
        description: "Lorem ipsum on 1500-luvulta lähtien olemassa ollut teksti, jota käytetään usein täysa. Jota käytetään usein täysa jota käytetään usein."
      },
     
    ]);
  
    return { data, setData };
  };