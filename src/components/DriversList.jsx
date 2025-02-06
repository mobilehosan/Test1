import PropTypes from 'prop-types';
import DriverRecord from "./DriverRecord";

const DriverList = ({ drivers }) => {
  return (
    <>
      {!drivers || drivers.length === 0 ? (
        <p>No drivers found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Registration</th>
              <th>Total Minutes</th>
              <th>Drive Minutes</th>
              <th>Rest Minutes</th>
              <th>Work Minutes</th>
              <th>Available Minutes</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <DriverRecord key={driver.driverID} driver={driver} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

DriverList.propTypes = {
  drivers: PropTypes.arrayOf(
    PropTypes.shape({
      driverID: PropTypes.number.isRequired,
      forename: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
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
    })
  ).isRequired,
};

export default DriverList;