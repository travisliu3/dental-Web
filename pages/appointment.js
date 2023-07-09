import React from 'react';
import { Container, Row, Button, Col, Form, NavDropdown } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Appointment() {

    const [isEnabled, setisEnabled] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    async function submitForm(data) {
        let ebody = `
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Message: ${data.message}</p>
    <p>Subject: ${data.subject}</p>
    <p>Date: ${data.date}</p>
    <p>Date: ${data.other}</p>
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
                    <h2>Book Your Appointment</h2>
                </Row>
                <Row className='text-center'>
                    <p>Contact us online or call us at 943-112-8804 to schedule your appointment</p>
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
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Select name="subject" onChange={handleChange}>
                                        <option value="Appointment" {...register("subject", { required: true })}>New Patient, booking my first appointment</option>
                                        <option value="Appointment" {...register("subject", { required: true })}>Exsisting Patient, booking a new appointment</option>
                                        <option value="Appointment" {...register("subject", { required: true })}>Rescheduling my appointment</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            {
                                !isEnabled ? (
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control type="date" name="date" {...register("date", { required: true })}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Time</Form.Label>
                                                <Form.Select name="time" {...register("time", { required: true })}>
                                                    <option value="10AM-11AM">10AM-11AM</option>
                                                    <option value="11AM-12PM">11AM-12PM</option>
                                                    <option value="12PM-1PM">12PM-1PM</option>
                                                    <option value="1PM-2PM">1PM-2PM</option>
                                                    <option value="2AM-3AM">2AM-3PM</option>
                                                    <option value="3AM-4PM">3AM-4PM</option>
                                                    <option value="4PM-5PM">4PM-5PM</option>
                                                    <option value="5PM-6PM">5PM-6PM</option>
                                                    <option value="6PM-7PM">6PM-7PM</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                ) : (
                                    <Form.Control disabled={!isEnabled} type="text" name="other" placeholder='Purpose of visit' {...register("other", { required: true })} />
                                )
                            }
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Any Notes for the doctor</Form.Label>
                                    <Form.Control type="text" placeholder="" name="message" {...register("message")} className={errors.q ? "is-invalid" : ""} />
                                    <Form.Text className="text-muted">
                                        (Optional)
                                    </Form.Text>
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
                    <br />
                    <br />
                </Row>
            </Container>
        </>
    );
}