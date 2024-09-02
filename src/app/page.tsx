import React from "react";
import SaleBanner from "@/components/SaleBanner";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";

const Home: React.FC = () => {
  return (
    <main className="grid grid-rows-[2rem_6rem_1fr] overflow-y-auto w-screen h-screen z-10">
      <SaleBanner />
      <NavBar />
      <div className="grid grid-cols-4 place-content-center gap-4 m-4 items-stretch -z-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Home;

// flex items-center justify-center min-h-screen bg-transparent
// grid grid-cols-1 place-content-center items-stretch
// "grid grid-rows-[4rem_15rem_1fr] w-screen h-screen overflow-hidden
