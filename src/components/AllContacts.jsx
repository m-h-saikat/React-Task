import React, { useState, useEffect } from "react";
import ShowContacts from "./ShowContacts.jsx";
import axios from "axios";

const AllContacts = () => {
  const [allContacts, setAllContacts] = useState([]);
  const GET_ALL_CONTACTS = "https://contact.mediusware.com/api/contacts/";
  useEffect(() => {
    axios
      .get(GET_ALL_CONTACTS)
      .then((res) => {
        setAllContacts(res?.data?.results);
      })
      .catch((err) => {
        console.log(err?.message);
      });
  }, []);
  return (
    <>
      <ShowContacts data={allContacts} />
    </>
  );
};

export default AllContacts;
