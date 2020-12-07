import React, { useState } from "react";
import "./styles.css";

var dataBase = {
  Places: [
    {
      a: "Taj Mahal"
    },
    {
      a: "Gateway of India"
    },
    {
      a: "India Gate"
    },
    {
      a: "Qutub Minar"
    }
  ],
  Food: [
    {
      a: "Chhole Bhature"
    },
    {
      a: "Butter Chicken"
    },
    {
      a: "Gulab Jamun"
    },
    {
      a: "Dosa"
    }
  ],
  People: [
    {
      a: "Mother Teresa"
    },
    {
      a: "Sarojini Naidu"
    }
  ]
};

var known = Object.keys(dataBase);

export default function App() {
  const [display, setDisplay] = useState("Places");

  function placesDisplay(noun) {
    setDisplay(noun);
  }
  function bgColor(index) {
    if (index % 2 !== 0) return "#33C4FF";
  }
  return (
    <div className="App">
      <nav>
        <span>
          <b>Incredible</b> इंडिया!
        </span>
      </nav>
      <img src="public/indiaa.jpg" alt="c" />
      <div
        style={{
          margin: "3em",
          fontStyle: "italic"
        }}
      >
        India is known for its rich culture and heritage. We bring to you some
        places you can visit and food you can try when you visit us!{" "}
      </div>
      <section>
        {known.map((noun) => (
          <li onClick={() => placesDisplay(noun)}>{noun}</li>
        ))}
      </section>

      {dataBase[display].map((noun, index) => (
        <li
          style={{
            border: "1px solid black",
            borderRadius: "0.5em",
            padding: "2em",
            listStyle: "none",
            width: "25%",
            boxShadow: "5px 5px 5px gray",
            display: "inline-block",
            marginLeft: "2em",
            marginRight: "2em",
            backgroundColor: bgColor(index),
            marginTop: "2em"
          }}
        >
          <div> {noun.a} </div>
        </li>
      ))}
    </div>
  );
}
