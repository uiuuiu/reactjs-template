import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './About.scss'

const About = () => {
    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    }

    return (
        <>
            This is about page
            <Button onClick={handleBack}>go back</Button>
        </>
    )
}

export default About;
