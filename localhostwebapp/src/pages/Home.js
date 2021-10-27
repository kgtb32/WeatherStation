import React from 'react'
import logo from "../logo.gif";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Home() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
        <DropdownButton className="Dropdown" id="dropdown-basic-button" title="Langue">
          <Dropdown.Item>Anglais</Dropdown.Item>
          <Dropdown.Item>Français</Dropdown.Item>
        </DropdownButton>
        <Button variant="primary">Suivant</Button>{" "}
    </div>
  )
}
