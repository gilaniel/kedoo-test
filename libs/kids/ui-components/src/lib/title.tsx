import React from 'react';

export const MainTitle = ({ title, subtitle }: { title: React.ReactNode; subtitle?: string }) => {
  return (
    <div className="flex flex-col items-center text-center my-[100px] relative z-[13] px-5">
      <h1 className="kids-h1 mb-5">{title}</h1>

      <p className="kids-subtitle">{subtitle}</p>
    </div>
  );
};
