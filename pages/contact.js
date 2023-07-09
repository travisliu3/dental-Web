import React from 'react';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Contact() {

    const [isEnabled, setisEnabled] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    async function submitForm(data) {
        let ebody = `
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Message: ${data.message}</p>
    `
        //     let ethank = `
        //     <p>Dear ${data.name},</p>
        //     <p>Thank you for your interest in my professional journey. I greatly appreciate your consideration
        //      and am excited about the potential possibilities ahead. I look forward to connecting with you soon
        //       to discuss how I can contribute to your team.</p>
        //     <p>Regards,</p>
        //     Travis Liu
        // `
        //     Email.send({
        //         SecureToken: process.env.NEXT_PUBLIC_SMTP_SECURITY_TOKEN,
        //         To: data.email,
        //         From: "travisliu3@gmail.com",
        //         Subject: "Thank you for contacting Travis Liu",
        //         Body: ethank
        //     }).then(
        //         message => console.log('message sent')
        //     );
        //     Email.send({
        //         SecureToken: process.env.NEXT_PUBLIC_SMTP_SECURITY_TOKEN,
        //         To: 'travisliu3@gmail.com',
        //         From: "travisliu3@gmail.com",
        //         Subject: "Prospcective employer " + data.name,
        //         Body: ebody
        //     }).then(
        //         message => {
        //             alert('Thank you for contacting, I will reply atmost in 2 bussiness days.');
        //             router.push('/');;
        //         }
        //     );
        router.push('/')
    }

    function handleChange(e) {
        const selectedOption = e.target.value;
        setisEnabled(selectedOption === 'Other');
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Row className='text-center'>
                    <h1>ASK US ANYTHING!</h1>
                </Row>
                <br />
                <Row>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="" name="name" {...register("name", { required: true })} />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="" name="email" {...register("email", { required: true })} />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="" name="phone" {...register("phone", { required: true })} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Question or message</Form.Label>
                                    <Form.Control type="text" placeholder="" name="message" {...register("message", { required: true })} className={errors.q ? "is-invalid" : ""} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <br />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </>
    );
}