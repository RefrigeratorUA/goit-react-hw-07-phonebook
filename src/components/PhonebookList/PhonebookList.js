import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import actions from '../../redux/contacts/contacts-actions';
import Filter from '../Filter';
import PhonebookListItem from '../PhonebookListItem';
import styles from './PhonebookList.module.css';

const PhonebookList = ({ contacts, filter, onDelete }) => {
  return (
    <>
      {(contacts.length > 1 || filter) && <Filter />}

      <TransitionGroup component="ul" className="list">
        {contacts.map(({ name, id, number }) => (
          <CSSTransition key={id} timeout={250} classNames={styles}>
            <PhonebookListItem name={name} number={number} id={id} onDelete={onDelete} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  onDelete: PropTypes.func,
};

const getFilteredContacts = (items, filter) =>
  items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
  filter: filter,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
