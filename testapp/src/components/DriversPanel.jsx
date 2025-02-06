import SearchBar from "./SearchBar";
import DriversList from "./DriversList";
import { useState, useEffect } from "react";
import useProcessedDrivers from "../hooks/useProcessedDrivers";

function DriversPanel() {
  const { data, loading, error } = useProcessedDrivers();
  const [filteredDrivers, setFilteredDrivers] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredDrivers(data);
    }
  }, [data]);

  const filterItems = (searchTerm) => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    const filteredItems = data.filter((driver) =>
      driver.forename.toLowerCase().includes(lowerCaseSearch) ||
      driver.surname.toLowerCase().includes(lowerCaseSearch) ||
      driver.vehicleRegistration.toLowerCase().includes(lowerCaseSearch)
    );

    setFilteredDrivers(filteredItems);
  };

  return (
    <div className="body-panel">
      <SearchBar onChangeCallback={filterItems} />
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the drivers</p>}
      {!loading && !error && <DriversList drivers={filteredDrivers} />}
    </div>
  );
}

export default DriversPanel;
