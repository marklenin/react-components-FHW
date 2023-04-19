import React from "react";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Footer from "./components/footer/Footer";

function App() {
  let users = [
    {
      name: "Makers",
      lastName: "Bootcamp",
      age: 6,
      id: Date.now(),
    },
    {
      name: "Jhonny",
      lastName: "Depp",
      age: 56,
      id: Date.now(),
    },
    {
      name: "Brad",
      lastName: "Pitt",
      age: 54,
      id: Date.now(),
    },
    {
      name: "Kim",
      lastName: "Il Sung",
      age: 99,
      id: Date.now(),
    },
    {
      name: "Kim",
      lastName: "Jong-un",
      age: 48,
      id: Date.now(),
    },
    {
      name: "Makers",
      lastName: "Bootcamp",
      age: 6,
      id: Date.now(),
    },
    {
      name: "Jhonny",
      lastName: "Depp",
      age: 56,
      id: Date.now(),
    },
    {
      name: "Brad",
      lastName: "Pitt",
      age: 54,
      id: Date.now(),
    },
    {
      name: "Kim",
      lastName: "Il Sung",
      age: 99,
      id: Date.now(),
    },
    {
      name: "Kim",
      lastName: "Jong-un",
      age: 48,
      id: Date.now(),
    },
    {
      name: "Makers",
      lastName: "Bootcamp",
      age: 6,
      id: Date.now(),
    },
    {
      name: "Jhonny",
      lastName: "Depp",
      age: 56,
      id: Date.now(),
    },
    {
      name: "Brad",
      lastName: "Pitt",
      age: 54,
      id: Date.now(),
    },
    {
      name: "Kim",
      lastName: "Il Sung",
      age: 99,
      id: Date.now(),
    },
    {
      name: "Kim",
      lastName: "Jong-un",
      age: 48,
      id: Date.now(),
    },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
}

export default App;
