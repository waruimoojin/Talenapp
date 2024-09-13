import React from "react";

const category = [
  {id: 1,name: "Process Engineer",count: "904 Open Positions",},
  { id: 2, name: "Supplier Quality Engineer", count: "364 Open Positions" },
  { id: 3, name: "Industrialization engineer", count: "364 Open Positions" },
  { id: 4, name: "Mobile Android Engineer", count: "364 Open Positions" },
  { id: 5, name: "Software Developer", count: "364 Open Positions" },
  { id: 6, name: "Data Scientist", count: "364 Open Positions" },
  { id: 7, name: "Financial Manager", count: "364 Open Positions" },
  { id: 8, name: "Management Analysis", count: "364 Open Positions" },
  { id: 9, name: "IT Manager", count: "364 Open Positions" },
  { id: 10, name: "Research Analysis", count: "364 Open Positions" },
  { id: 11, name: "Network Engineer", count: "364 Open Positions" },
  { id: 12, name: "IT Manager", count: "364 Open Positions" },
];

const PopularCategory = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-12 px-6 mb-20">
      <h2 className="md:text-3xl text-2xl font-semibold mb-5">Most Popular Vacancies</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            category.map(({name, id, count}) => (
                <div key={id}>
                    <p className="text-lg text-[#5956e9]">{name}</p>
                    <p className="text-sm text-[#767F8C]">{count}</p>
                </div>
            ))
        }
      </div>

    </div>
  );
};

export default PopularCategory;
