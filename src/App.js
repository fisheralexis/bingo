import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Row  xs={5} md={5} className="g-4">
        <Col key={1}>
          <Card>
          <Card.Body>
              <Card.Title >B</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col key={2}>
          <Card>
          <Card.Body>
              <Card.Title >I</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col key={3}>
          <Card>
          <Card.Body>
              <Card.Title >N</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col key={4}>
          <Card>
          <Card.Body>
              <Card.Title >G</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col key={5}>
          <Card>
          <Card.Body>
              <Card.Title >O</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
          <Row xs={5} md={5} className="g-4">
      {Array.from({ length: 25 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default App;
