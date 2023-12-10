import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Questions = () => {
    return (
        <>
            <h2>Frequently Asked Questions</h2>
            <Container>
                <Row>
                    <Col>
                        <h3></h3>
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What skills are needed to become an IndyFixer?</Accordion.Header>
                                    <Accordion.Body className='text-start'>
                                    Being a handyman requires both mental and physical skills such as:<br></br>
                                    <br></br>
Problem-solving: Handymen often have to think of the solution to a home owner's unique problems.<br></br>
Creativity: Being creative helps handymen achieve their client's needs in the most efficient and cost-effective way.<br></br>
Endurance: Many responsibilities of a handyman take several hours, days or weeks, requiring physical stamina and mental endurance.<br></br>
Dexterity: Because handymen work with their hands, they need to be agile and dexterous when handling fragile materials or dangerous repair tools.<br></br>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>How do I contact a Fixer?</Accordion.Header>
                                    <Accordion.Body className='text-start'>
                                        Second Item
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Questions;