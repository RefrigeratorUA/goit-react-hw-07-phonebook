import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

const Filter = ({ onFilterChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input className="input" type="text" onChange={onFilterChange}></input>
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onFilterChange: event => dispatch(actions.filterContacts(event.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
