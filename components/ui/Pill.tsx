const Pill: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="bg-gray-200 text-gray-700 rounded-full px-4 py-1 mr-2 hover:bg-gray-300">
      {label}
    </button>
  );
};

export default Pill;
