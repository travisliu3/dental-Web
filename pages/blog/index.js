import React from 'react';
import { Container, Row, Pagination, Col, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import BlogCard from '../../components/BlogCard';
import { useEffect, useState } from "react";
import validObjectIDList from "../../public/data/validObjectIDList.json";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Blog() {

    const PER_PAGE = 12

    const [blogList, setBlogList] = useState([]);
    const [page, setPage] = useState(1);
    const router = useRouter();
    let finalQuery = router.asPath.split('?')[1];
    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/search?title=true&q=g`);

    useEffect(() => {
        if (data) {
            let results = new Array();
            let filteredResults = validObjectIDList.objectIDs.filter(x => data.objectIDs?.includes(x));

            for (let i = 0; i < filteredResults.length; i += PER_PAGE) {
                const chunk = filteredResults.slice(i, i + PER_PAGE);
                results.push(chunk);
            }
            setBlogList(results);
            setPage(1);
        }
    }, [data]);

    function previousPage() {
        if (page > 1) {
            setPage(pagenum => pagenum - 1);
        }
    }

    function nextPage() {
        if (page < blogList.length) {
            setPage(pagenum => pagenum + 1);
        }
    }

    if (blogList) {
        return (
            <>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container className='text-center'>
                    <Row className="gy-2">
                        <h2>BLOG</h2>
                    </Row>
                    <br />
                    <Row className="gy-4">
                        {blogList.length > 0 ? (
                            blogList[page - 1].map(currentObjectID => (
                                <Col lg={3} key={currentObjectID}>
                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <BlogCard objectID={currentObjectID} />
                                    </motion.div>
                                </Col>
                            ))
                        ) : (
                            <Col lg={12}>
                                <Card>
                                    <Card.Body>
                                        <h4>Nothing Here</h4>
                                        Try searching for something else.
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                    {blogList.length > 0 && (
                        <Row>
                            <Col>
                                <Pagination>
                                    <Pagination.Prev onClick={previousPage} />
                                    <Pagination.Item active>{page}</Pagination.Item>
                                    <Pagination.Next onClick={nextPage} />
                                </Pagination>
                            </Col>
                        </Row>
                    )}
                    <br />
                    <br />
                </Container>

            </>
        )
    }
    else {
        return null
    }

}