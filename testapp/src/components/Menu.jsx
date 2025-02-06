import React from "react";
import { useMenuDataService } from "../hooks/useMenuDataService";
import MenuItem from "./MenuItem";

function Menu() {
  const { data, loading, error } = useMenuDataService();

  if (loading) return <div>Loading Menu...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <nav className="menu">
      <ul>
        {data.data?.map((item, index) => (
          <MenuItem key={index.data} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
