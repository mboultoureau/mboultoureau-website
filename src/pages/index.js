import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Header from '../components/Header';

import './index.css';

const IndexPage = () => (
    <Layout>
        <SEO title='Mathis Boultoureau' />
        <Header />
        <Home />
        <Portfolio />
        <Contact />
    </Layout>
);

export default IndexPage;
