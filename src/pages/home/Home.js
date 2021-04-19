import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Home.scss';

const Home = () => {
    const authenticated = localStorage.getItem('name');

    const login = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log('form', form);
    }

    return (
        <>
            <Form onSubmit={login}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link to='/about'>About</Link>
            {authenticated && <Link to='/users'>Users</Link>}
        </>
    )
}

export default Home;
