import Pill from "./Pill";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly"];

const FilterSection: React.FC = () => {
  return (
    <section className="p-4 flex">
      {filters.map((filter) => (
        <Pill key={filter} label={filter} />
      ))}
    </section>
  );
};

export default FilterSection;
