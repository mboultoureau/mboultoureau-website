import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ScrollIndicator from '../ScrollIndicator';

import './portfolio.css';

const Portfolio = () => {
    const data = useStaticQuery(graphql`
        query {
            clock: file(relativePath: { eq: "clock.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            minesweeper: file(relativePath: { eq: "minesweeper.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            randomQuoteMachine: file(
                relativePath: { eq: "random-quote-machine.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            snake: file(relativePath: { eq: "snake.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            twoThousandFortyEight: file(relativePath: { eq: "2048.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tictactoe: file(relativePath: { eq: "tictactoe.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fitech: file(relativePath: { eq: "fitech.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pong: file(relativePath: { eq: "pong.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <section id='portfolio'>
            <h2>Portfolio</h2>
            <div className='content'>
                <article>
                    <a
                        href='https://codepen.io/mboultoureau/full/JgojYR'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            fluid={data.clock.childImageSharp.fluid}
                            alt='Analog Apple Watch Clock'
                        />
                    </a>
                </article>
                <article>
                    <a
                        href='https://codepen.io/mboultoureau/full/rXGLpQ'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            fluid={data.minesweeper.childImageSharp.fluid}
                            alt='Minesweeper'
                        />
                    </a>
                </article>
                <article>
                    <a
                        href='https://codepen.io/mboultoureau/full/gOYrPaE'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            fluid={
                                data.randomQuoteMachine.childImageSharp.fluid
                            }
                            alt='Random Quote Machine'
                        />
                    </a>
                </article>
                <article>
                    <a
                        href='https://codepen.io/mboultoureau/full/bXNGNm'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            fluid={data.snake.childImageSharp.fluid}
                            alt='Snake'
                        />
                    </a>
                </article>
                <article>
                    <a
                        href='https://codepen.io/mboultoureau/full/KOgKom'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            fluid={
                                data.twoThousandFortyEight.childImageSharp.fluid
                            }
                            alt='2048'
                        />
                    </a>
                </article>
                <article>
                    <a
                        href='https://github.com/mboultoureau/coding-challenges/tree/master/04_TicTacToe'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            fluid={data.tictactoe.childImageSharp.fluid}
                            alt='TicTacToe'
                        />
                    </a>
                </article>
                <article>
                    <a
                        href='https://github.com/ronanren/site-ppp'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            fluid={data.fitech.childImageSharp.fluid}
                            alt='fitech'
                        />
                    </a>
                </article>
                <article>
                    <a
                        href='https://github.com/mboultoureau/coding-challenges/tree/master/05_Pong'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Img
                            fluid={data.pong.childImageSharp.fluid}
                            alt='Pong'
                        />
                    </a>
                </article>
            </div>
            <div className='see-more'>
                <a
                    href='https://github.com/mboultoureau'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    See more projects
                </a>
            </div>
            <ScrollIndicator next='Contact' link='#contact' />
        </section>
    );
};

export default Portfolio;
