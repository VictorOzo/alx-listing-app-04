import HeroSection from "@/components/ui/HeroSection";
import FilterSection from "@/components/ui/FilterSection";
import ListingSection from "@/components/ui/ListingSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FilterSection />
      <ListingSection />
    </>
  );
};

export default HomePage;
