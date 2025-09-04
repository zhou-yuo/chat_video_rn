import { FlashList } from "@shopify/flash-list";
import React from 'react';
import ContactsListItem from "./ContactsListItem";
import { ContactsInfoType } from './types';

interface PropsType {
  list: ContactsInfoType[]
}

function ContactsList(props: PropsType) {
  const { list = [] } = props;
  return (
    <FlashList
      data={ list }
      renderItem={({ item }) => <ContactsListItem userInfo={ item } />}
    />
  )
}

export default ContactsList