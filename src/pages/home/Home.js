import { Button, Image } from 'react-bootstrap';
import React from 'react';
import dashboardImage from '../../assets/images/home-final-dashboard.png';
import './Home.scss';

const Home = () => {

    return (
        <div className="home">
            <div className="home-introduction-container">
                <div className="home-introduction-panel">
                    <div className="home-introduction-slogan">
                        {"BUILD AND MANAGE YOUR STARTUP!"}
                    </div>
                    <div className="home-introduction-title">
                        {"Let's Start Up"}
                    </div>
                    <div className="home-introduction-content">
                        {"Start and grow your company with business planning tools, templates, and more resources for founders. Our all-in-one app for entrepreneurs has everything you need to secure capital and scale your startup."}
                    </div>
                    <div className="home-introduction-buttons">
                        <Button className="home-introduction-try-button">Try it Free!</Button>
                        <Button className="home-introduction-pricing-button">See Pricing</Button>
                    </div>
                </div>
            </div>
            <div className="home-business-plan-container"></div>
            <div className="home-founder-container"></div>
            <div className="home-pricing-container">
                <div className="home-pricing-panel">
                    <div className="home-pricing-item">
                        <Button className="home-pricing-button">Get Started</Button>
                    </div>
                    <div className="home-pricing-item">
                        <Button className="home-pricing-button">Get Started</Button>
                    </div>
                    <div className="home-pricing-item">
                        <Button className="home-pricing-button">Get Started</Button>
                    </div>
                </div>
            </div>
            <div className="home-services-container"></div>
            <div className="home-final-container">
                <div className="home-final-content">
                    <p className="home-final-content-title">
                        Get in on the Action
                    </p>
                    <p className="home-final-content-description">
                        {"Let's Start building. "}
                    </p>
                    <Button className="home-final-content-button">Try it Free!</Button>
                </div>
                <Image src={dashboardImage} className="home-final-dashboard-image" width={650} height={450} />
            </div>
        </div>
    )
}

export default Home;
