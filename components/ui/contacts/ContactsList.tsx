import { FlashList } from "@shopify/flash-list";
import React from 'react';
import ContactsListItem from "./ContactsListItem";
import { ContactsInfoType } from './types';

function ContactsList() {
  const DATA: ContactsInfoType[] = [
    { id: 1, name: 'User1' },
    { id: 2, name: 'User2' },
    { id: 3, name: 'User3' },
    { id: 4, name: 'User4' },
    { id: 5, name: 'User5' },
  ]
  return (
    <FlashList
      data={DATA}
      renderItem={({ item }) => <ContactsListItem userInfo={ item } />}
    />
  )
}

export default ContactsList