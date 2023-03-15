import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ContactDetail from "./ContactDetail";

function ShowContacts({ data }) {
  const [modal, setModal] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const toggle = () => setModal(!modal);
  const navigate = useNavigate();

  useEffect(() => {
    isChecked
      ? setFilteredData(data.filter((contact) => Number(contact?.id) % 2 === 0))
      : setFilteredData(data);
  }, [isChecked, data]);

  return (
    <div>
      {openModal && (
        <ContactDetail
          toggle={setOpenModal}
          contact={contact}
          modal={openModal}
        />
      )}
      <Modal isOpen={modal} toggle={() => navigate("/problem-2")}>
        <ModalHeader toggle={() => navigate("/problem-2")} className='mx-auto'>
          Contacts
        </ModalHeader>
        <ModalBody>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col mx-auto'>ID</th>
                <th scope='col mx-auto'>Phone</th>
                <th scope='col mx-auto'>Country</th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((contact) => (
                <tr
                  key={contact?.id}
                  onClick={() => {
                    setOpenModal(!openModal);
                    setContact(contact);
                  }}
                >
                  <td>{contact?.id}</td>
                  <td>{contact?.phone}</td>
                  <td>{contact?.country.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button
            className='btn '
            style={{backgroundColor:'#46139f'}}
            onClick={() => navigate("/contacts")}
          >
            All Contacts
          </Button>
          <Button
            className='btn '
            style={{backgroundColor:'#ff7f50'}}

            onClick={() => navigate("/us-contacts")}
          >
            US Contacts
          </Button>
          <Button
            className='btn '
            style={{backgroundColor:'white', border :'1px solid #46139f' ,color:'black'}}

            onClick={() => navigate("/problem-2")}
          >
            Cancel
          </Button>
          Only even:
          <input
            type='checkbox'
            onClick={() => setIsChecked(!isChecked)}
            value={isChecked}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ShowContacts;
