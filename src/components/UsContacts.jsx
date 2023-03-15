import React, { useState, useEffect } from "react";
import ShowContacts from "./ShowContacts.jsx";
import axios from "axios";

const UsContacts = () => {
  const [usContacts, setUSContacts] = useState([]); // Initializing an empty array to hold the contacts
  const GET_ALL_CONTACTS_BY_COUNTRY_NAME =
    "https://contact.mediusware.com/api/country-contacts/";

  const countryName = "United States";
  useEffect(() => {
    axios
      .get(`${GET_ALL_CONTACTS_BY_COUNTRY_NAME}${countryName}/`)
      .then((res) => {
        setUSContacts(res.data.results);
      })
      .catch((err) => {
        console.log(err.message); // Logging any errors occurred during fetching
      });
  }, []);
  return (
    <>
      <ShowContacts data={usContacts} />
    </>
  );
};

export default UsContacts;
