import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <img
        src={`https://www.ironwooddental.com/hubfs/Blog_images/cosmetic_dentistry-n4o2dplupts9ys28zlmqjmn6y3c3h7zy133nsv04oo.jpg`}
        style={{
          zIndex: -1,
          width: '100%',
          height: '80vh',
          opacity: 0.8,
          position: 'absolute'
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container className='p-5'>
        <Row>
          <h1>Welcome to Cosmetic Dental Clinic</h1>
        </Row>
        <br />
        <Row>
          <Col lg={6}>
            <p className='fs-5'>
              Experience exceptional full-service dental care in Bokaro Steel City. Our professionl environment
              and skilled team ensure your utmost satisfaction. Visit us for personalized, comprehensive treatment
              and leave with a confident smile.
            </p>
          </Col>
        </Row>
        <Button className='bg-info m-2'>
          <Link className='text-white fw-bold text-decoration-none' href={'/appointment'}>
            Book Appointment
          </Link>
        </Button>
        <Button className='bg-info m-2'>
          <Link className='text-white fw-bold text-decoration-none' href={'tel:9431128804'}>
            Call 943-112-8804
          </Link>
        </Button>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container className='p-5'>
        <Row>
          <Col lg={6}>
            <h1>About Dr. John Liu</h1>
            <p>lorem asdsadsadas</p>
          </Col>
          <Col lg={6}>
            <Image
              src={'/../public/favicon.ico'}
              width={400}
              height={400}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <h1>Why Cosmentic Dental Clinic</h1>
          <br />
          <p>lorem</p>
        </Row>
      </Container>
    </>
  )
}
