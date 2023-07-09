import { useRouter } from 'next/router';
import BlogDetail from '../../components/BlogDetail';
import { Row, Col } from 'react-bootstrap'

export default function BlogById() {

    const router = useRouter();
    const { objectID } = router.query;
    
    return (
        <>
            <Row>
                <Col>
                    <BlogDetail objectID={objectID} />
                </Col>
            </Row>

        </>
    )
}