import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Service() {

    return (

        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <Row className="gy-2 text-center">
                    <h2>OUR DENTAL SERVICES</h2>
                    <p>We provide comprehensive dental services to ensure your oral health. From routine
                        check-ups to cosmetic and restorative treatments, our skilled team is here to
                        create beautiful smiles. To see the transformative results, visit our
                        <Link class='text-decoration-none' href={'/images'}> before and after pages</Link>.
                        Book your appointment and let us care for your smile.</p>
                    <Col className='text-center' lg={12}>
                        <Button>
                            <Link className='text-white fw-bold text-decoration-none' href={'/appointment'}>
                                <svg width="25" height="15" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                                Book Appointment
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <br />
                <br />
                <Row className='gy-5'>
                    <Col lg={6} className='serviceBack'>
                        <div>
                            <div><h3><strong>Preventive Services</strong></h3></div>
                            <p>_______________</p>
                        </div>
                        <div>
                            <div>
                                <p>Regular check-ups, cleanings, X-rays, and treatments to maintain oral
                                    health and prevent dental problems.</p>
                                <p>Our preventive services include:</p>
                                <ul>
                                    <li>Routine dental check-ups and cleanings</li>
                                    <li>Dental examinations and X-rays</li>
                                    <li>Fluoride treatments</li>
                                    <li>Sealants to prevent tooth decay</li>
                                    <li>Oral hygiene education and instructions</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <div><h3><strong>Restorative Services</strong></h3></div>
                            <p>_______________</p>
                        </div>
                        <div>
                            <div>
                                <p>Procedures to repair and restore damaged or missing teeth, such as fillings,
                                    crowns, bridges, dentures, and implants.</p>
                                <p>Our restorative dental treatments include:</p>
                                <ul>
                                    <li>Fillings (amalgam, composite, or porcelain)</li>
                                    <li>Dental crowns (caps) to cover damaged teeth</li>
                                    <li>Bridges to replace missing teeth</li>
                                    <li>Dentures (partial or complete) for tooth loss</li>
                                    <li>Dental implants for single or multiple missing teeth</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <div><h3><strong>Cosmetic Dentistry</strong></h3></div>
                            <p>_______________</p>
                        </div>
                        <div>
                            <div>
                                <p>Treatments aimed at enhancing the appearance of teeth, including whitening,
                                    veneers, bonding, gum reshaping, and orthodontics.</p>
                                <p>Our cosmetic dental services include:</p>
                                <ul>
                                    <li>Teeth whitening (in-office or at-home treatments)</li>
                                    <li>Dental veneers (thin shells to improve tooth appearance)</li>
                                    <li>Dental bonding (resin material to repair chipped or discolored teeth)</li>
                                    <li>Gum contouring or reshaping</li>
                                    <li>Orthodontic treatments (braces, aligners) for tooth alignment</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='serviceBack'>
                        <div>
                            <div><h3><strong>Oral Surgery</strong></h3></div>
                            <p>_______________</p>
                        </div>
                        <div>
                            <div>
                                <p>Surgical procedures involving tooth extraction, dental implants,
                                    corrective jaw surgery, and biopsy of oral lesions.</p>
                                <p>Oral surgery includes:</p>
                                <ul>
                                    <li>Tooth extraction (including wisdom teeth removal)</li>
                                    <li>Dental implant placement</li>
                                    <li>Corrective jaw surgery (orthognathic surgery)</li>
                                    <li>Biopsy of suspicious oral lesions</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='serviceBack'>
                        <div>
                            <div><h3><strong>Periodontal (Gum) Treatment</strong></h3></div>
                            <p>_______________</p>
                        </div>
                        <div>
                            <div>
                                <p>Services focused on preventing and treating gum disease, including deep
                                    cleanings, gum grafting, maintenance, and surgery.</p>
                                <p>Our Periodontal treatments include:</p>
                                <ul>
                                    <li>Scaling and root planing (deep cleaning)</li>
                                    <li>Periodontal maintenance</li>
                                    <li>Gum grafting (to treat gum recession)</li>
                                    <li>Periodontal surgery (for advanced gum disease)</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <div><h3><strong>Endodontic Treatment</strong></h3></div>
                            <p>_______________</p>
                        </div>
                        <div>
                            <div>
                                <p>Procedures addressing issues with the tooth pulp, such as root canal
                                    therapy, retreatment, and apicoectomy.</p>
                                <p>Our Endodontic dental treatments include:</p>
                                <ul>
                                    <li>Root canal therapy (to treat infected or damaged tooth pulp)</li>
                                    <li>Endodontic retreatment (if previous root canal treatment fails)</li>
                                    <li>Apicoectomy (surgical removal of the tip of the tooth root)</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} className='text-center'>
                        <div>
                            <div><h3><strong>Full Mouth Transformation</strong></h3></div>
                            <p>_______________</p>
                        </div>
                        <div>
                            <div>
                                <p>A comprehensive dental treatment plan designed to address multiple
                                    oral health issues and completely transform a patient's smile.
                                    It typically involves a combination of restorative, cosmetic, and
                                    orthodontic procedures to improve the appearance, function, and overall
                                    health of the teeth, gums, and jaw. The goal is to achieve a beautiful,
                                    harmonious smile and restore optimal oral functionality for enhanced confidence
                                    and improved quality of life.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
}