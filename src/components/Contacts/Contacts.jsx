import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './contacts.module.css';
import { List } from './List';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <List
          key={nanoid()}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export { Contacts };
