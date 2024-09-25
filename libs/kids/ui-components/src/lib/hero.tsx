export const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col text-center items-center px-5">
      <h2 className="kids-h2 mb-5">{title}</h2>
      {subtitle && <p className="kids-h3 mb-5">{subtitle}</p>}
    </div>
  );
};
