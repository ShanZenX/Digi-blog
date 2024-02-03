"use client";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "@/app/images/digi-blog-logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar expand="lg" className="  backdrop-blur-sm bg-white/40 z-20 shadow-md !sticky top-0">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} width={120} height={0} alt="logo"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5">
            <Link href={"/"} className="no-underline text-black  items-center flex ">Home</Link>
            <Link href={"/blog"} className="no-underline text-black  items-center flex ">Blog</Link>
            <Link href={"/write"} className="no-underline text-black  items-center flex ">Write</Link>
            <Link href={"/team"} className="no-underline text-black  items-center flex ">Team</Link>
          </Nav>
          <Nav.Link href="/" className="px-2 py-1  rounded text-center">
            Login
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
