"use client";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "@/app/images/digi-blog-logo.png";

export default function Header() {
  return (
    <Navbar expand="lg" className=" bg-transparent shadow-md">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} width={120} height={0} alt="logo"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Write</Nav.Link>
            <Nav.Link href="#link">Team</Nav.Link>
          </Nav>
          <Nav.Link href="" className="px-2 py-1  rounded text-center">
            Login
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
