// src/app/home/page.tsx
import React from "react";
import SaleBanner from "@/components/SaleBanner";
import NavBar from "@/components/NavBar";
import Card from "@/components/Card";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <SaleBanner />
      <NavBar />
      <div>
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
