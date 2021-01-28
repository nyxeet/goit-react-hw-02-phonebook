import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Layout from './Layout/Layout'
import ContactsEditor from './ContactsEditor/ContactsEditor'
import ContactsList from './ContactsList/ContactsList'


class App extends React.Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    }

    addContact = (name, number) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
        }
        this.setState(prevState => {
            return { contacts: [...prevState.contacts, contact] }
        })
    };
    filterContacts = e => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact => contact.name.includes(filter))
    }
    changeFilter = filter => {
        this.setState({ filter: filter });
    };


    render() {
        const filteredList = this.filterContacts();
        return (
            <Layout>
                <ContactsEditor addContact={this.addContact} />
                <label>
                    Find contacts by name
                    <br/>
                    <input type="text" value={ this.filter } onChange={e => this.changeFilter(e.target.value)}/>        
                </label>
                <ContactsList tasks={ filteredList }/>
            </Layout>
        )
    }
}

export default App