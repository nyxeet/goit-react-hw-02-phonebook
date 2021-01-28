import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Layout from './Layout/Layout'
import ContactsEditor from './ContactsEditor/ContactsEditor'
import ContactsList from './ContactsList/ContactsList'


class App extends React.Component {
    state = {
        contacts: [],
        name: '',
    }

    addContact = (text, tel) => {
        const contact = {
            id: uuidv4(),
            text,
            tel,
        }
        this.setState(prevState => {
            return { contacts: [...prevState.contacts, contact] }
        })
    };

    render() {
        return (
            <Layout>
                <ContactsEditor addContact={this.addContact} />
                <ContactsList tasks={ this.state.contacts }/>
            </Layout>
        )
    }
}

export default App