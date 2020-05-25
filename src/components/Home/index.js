import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './home.css';
import ScrollIndicator from '../ScrollIndicator';

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            profile_picture: file(relativePath: { eq: "profile-picture.png" }) {
                childImageSharp {
                    fixed(width: 200, height: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <section id='home'>
            <div className='content'>
                <div>
                    <Img fixed={data.profile_picture.childImageSharp.fixed} />
                    <div className='round'></div>
                    <div className='bar'></div>
                </div>
                <div>
                    <h1>I'm Mathis Boultoureau</h1>
                    <p>Computer Science Student</p>
                </div>
            </div>

            <ScrollIndicator next='Portfolio' link='#portfolio' />
        </section>
    );
};

export default Home;
