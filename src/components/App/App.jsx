import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts/Contacts';
import { Form } from 'components/Form/Form';
import styles from './app.module.css';
import { Filter } from 'components/Filter/Filter';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    ...initialContacts,
  ]);

  const [filter, setFilter] = useState('');

  const addNewContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const isExistingContact = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExistingContact) {
      return alert(`${name} is alreade in contacts.`);
    }
    setContacts(prevState => [newContact, ...prevState]);
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const onDelete = deletedId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== deletedId)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Phone book</h2>
      <Form onSubmit={addNewContact} />
      <h2 className={styles.title}>Contacts</h2>
      <ul>
        {/* {this.state.contacts.map((id, name, number) => {
            <li key={id}>
              {name}: {number}
            </li>;
          })} */}
      </ul>
      <div className={styles.contactsContainer}>
        <Filter inputValue={filter} onChange={onFilter} />
        <Contacts contacts={filteredContacts} onDelete={onDelete} />
      </div>
    </div>
  );
};
// class OldApp extends Component {
//   state = {
//     contacts: [...initialContacts],
//     filter: '',
//     name: '',
//     number: '',
//   };
//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     console.log(this.contacts);
//     if (contacts !== null) {
//       this.setState({ contacts });
//       return;
//     }

//     this.setState({ contacts: [...initialContacts] });
//   }

//   addNewContact = ({ name, number }) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const checkedContacts = this.state.contacts.map(({ name }) =>
//       name.toLowerCase()
//     );
//     const nameToLowerCase = name.toLowerCase();

//     if (checkedContacts.includes(nameToLowerCase)) {
//       return alert(`${name} is already in contacs.`);
//     }

//     this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   };
//   onFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const filterToLowerCase = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filterToLowerCase)
//     );
//   };

//   onDelete = deletedId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== deletedId),
//     }));
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <h2>Phone book</h2>
//         <Form onSubmit={this.addNewContact} />
//         <h2>Contacts</h2>
//         <ul>
/* {this.state.contacts.map((id, name, number) => {
            <li key={id}>
              {name}: {number}
            </li>;
          })} */

//         </ul>
//         <div className={styles.contactsContainer}>
//           <Filter inputValue={this.state.filter} onChange={this.onFilter} />
//           <Contacts
//             contacts={this.getFilteredContacts()}
//             onDelete={this.onDelete}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export { App };
