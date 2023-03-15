import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ContactDetail({ contact, toggle, modal }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle(!modal)}>
        <ModalHeader toggle={() => toggle(!modal)}>Contact Details</ModalHeader>
        <ModalBody>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{contact?.id}</td>
                <td>{contact?.phone}</td>
                <td>{contact?.country?.name}</td>
              </tr>
            </tbody>
          </table>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ContactDetail;
