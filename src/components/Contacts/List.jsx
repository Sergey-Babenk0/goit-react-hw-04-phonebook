import PropTypes from 'prop-types';
import styles from './contacts.module.css';

// onDelete = deletedId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== deletedId),
//   }));
// };

const List = contacts => {
  const { id, name, number, onDelete } = contacts;
  return (
    <div key={id} className={styles.item}>
      {name}: {number}
      <button
        type="button"
        onClick={() => onDelete(id)}
        className={styles.button}
      >
        Delete
      </button>
    </div>
  );
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { List };
