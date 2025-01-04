const CategorySection = ({ categories, type }) => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{type === 'games' ? 'Game Categories' : 'App Categories'}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/tag/${category.name.toLowerCase()}`}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
