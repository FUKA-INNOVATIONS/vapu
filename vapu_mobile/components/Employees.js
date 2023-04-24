import { useState } from "react";

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
