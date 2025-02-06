import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MenuItem({ item }) {
  return (
    <li>
      <Link to={item.url}>{item.title}</Link>
    </li>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
