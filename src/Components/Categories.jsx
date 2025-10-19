import React, { use } from "react";
import { NavLink } from "react-router";
const CategoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
    const categories = use(CategoriesPromise)
    // console.log(categories)
  return (
    <div>
      <h2 className="font-bold">All Categories({categories.length})</h2>
      <div className="grid grid-cols-1 ">
        {categories.map(category => <NavLink key={category.id} className={'mt-5 btn border-none bg-base-100 hover:bg-base-200 text-accent'} to={`/category/${category.id}`}>{category.name}</NavLink>)}
      </div>
    </div>
  );
};

export default Categories;
