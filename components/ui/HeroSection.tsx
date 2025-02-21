const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
      <p className="text-lg mt-2">
        The best prices for over 2 million properties worldwide.
      </p>
    </section>
  );
};

export default HeroSection;
