import React from "react";
import CardCategories from "./CardCategories";

const ContCardCategories = () => {
  return (
    <div className="w-full h-full  flex flex-wrap gap-5 justify-between">
      <CardCategories />
      <CardCategories bg="true" />
      <CardCategories />
      <CardCategories />
      <CardCategories />
      <CardCategories />
      <CardCategories />
      <CardCategories />
    </div>
  );
};

export default ContCardCategories;
