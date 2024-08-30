// src/components/SaleBanner.tsx
import React from "react";

const SaleBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[40px] bg-hotpink text-white flex items-center justify-center z-50">
      <p className="text-lg font-bold">50% OFF SALE ON YOUR FIRST PURCHASE</p>
    </div>
  );
};

export default SaleBanner;
