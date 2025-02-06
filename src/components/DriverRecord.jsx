import React from "react";
import PropTypes from "prop-types";
import "./DriverRecord.css";

function DriverRecord({ driver }) {
  return (
    <tr>
      <td>
        {driver.forename} {driver.surname}
      </td>
      <td>{driver.vehicleRegistration}</td>
      <td>{driver.totalWeekMinutes}</td>
      <td>{driver.activitySummary.drive || 0}</td>
      <td>{driver.activitySummary.rest || 0}</td>
      <td>{driver.activitySummary.work || 0}</td>
      <td>{driver.activitySummary.available || 0}</td>
      <td className="day">{driver.mon ? "🟩" : "⬜"}</td>
      <td className="day">{driver.tue ? "🟩" : "⬜"}</td>
      <td className="day">{driver.wed ? "🟩" : "⬜"}</td>
      <td className="day">{driver.thu ? "🟩" : "⬜"}</td>
      <td className="day">{driver.fri ? "🟩" : "⬜"}</td>
      <td className="day">{driver.sat ? "🟩" : "⬜"}</td>
      <td className="day">{driver.sun ? "🟩" : "⬜"}</td>
    </tr>
  );
}

DriverRecord.propTypes = {
  driver: PropTypes.shape({
    forename: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    vehicleRegistration: PropTypes.string.isRequired,
    totalWeekMinutes: PropTypes.number.isRequired,
    activitySummary: PropTypes.shape({
      drive: PropTypes.number.isRequired,
      rest: PropTypes.number.isRequired,
      work: PropTypes.number.isRequired,
      available: PropTypes.number.isRequired,
    }).isRequired,
    mon: PropTypes.number.isRequired,
    tue: PropTypes.number.isRequired,
    wed: PropTypes.number.isRequired,
    thu: PropTypes.number.isRequired,
    fri: PropTypes.number.isRequired,
    sat: PropTypes.number.isRequired,
    sun: PropTypes.number.isRequired,
  }).isRequired,
};

export default DriverRecord;