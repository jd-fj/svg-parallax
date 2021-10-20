import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Arc } from '../img/161.svg';
import { Container, Row} from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container>
          <Logo className="App-logo" alt="logo"/>
        <Row/>
          <Arc className="App-logo" alt="logo"/>
          <Logo className="App-logo" alt="logo"/>
          <Logo className="App-logo" alt="logo"/>
      </Container>
    </>
  );
}

export default Home;
