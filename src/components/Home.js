import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Arc } from '../img/161.svg';
import { Container, Row, Col} from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col xs>1<Logo className="App-logo" alt="logo"/></Col>
          <Col xs>2<Arc className="App-logo" alt="logo"/></Col>
          <Col xs>3<Logo className="App-logo" alt="logo"/></Col>
          <Col xs>4<Logo className="App-logo" alt="logo"/></Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
