import MainNav from './MainNav';
import { Button, Navbar, Nav, Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Layout(props) {

    const path = usePathname();

    return (
        <>
            <MainNav />
            {props.children}
            <br />
        </>
    )
}
