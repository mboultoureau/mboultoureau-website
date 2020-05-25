import React from 'react';

import './contact.css';

const Contact = () => {
    return (
        <section id='contact'>
            <h2>Contact</h2>
            <div className='content'>
                <div className='social'>
                    <h3>Let's keep in touch</h3>
                    <div className='social-content'>
                        <div className='social-medias'>
                            <a
                                href='https://twitter.com/mboultoureau'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <title>Twitter</title>
                                    <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z' />
                                </svg>
                            </a>
                            <a
                                href='https://github.com/mboultoureau'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <title>Github</title>
                                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                </svg>
                            </a>
                            <a
                                href='https://codepen.io/mboultoureau'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    alt='Codepen'
                                    src='data:image/png;base64,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'
                                />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/mboultoureau/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <title>Linkedin</title>
                                    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                                </svg>
                            </a>
                            <p>/mboultoureau</p>
                        </div>
                        <div className='email'>
                            <a href='mailto:contact@mboultoureau.com'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <title>Email</title>
                                    <path d='M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z' />
                                </svg>
                            </a>
                            <p>
                                <a href='mailto:contact@mboultoureau.com'>
                                    contact@mboultoureau.com
                                </a>
                            </p>
                        </div>
                        <div className='resume'></div>
                    </div>
                </div>
                <div className='form'>
                    <form
                        name='contact'
                        method='post'
                        data-netlify='true'
                        netlify-honeypot='bot-field'
                    >
                        <input type='hidden' name='form-name' value='contact' />
                        <input type='hidden' name='bot-field' />
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            aria-label='Name'
                            required
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email address'
                            aria-label='Email address'
                            required
                        />
                        <textarea
                            name='message'
                            placeholder='Message'
                            aria-label='Message'
                            required
                        ></textarea>
                        <input type='submit' value='Send' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
