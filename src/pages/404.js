import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import './index.css';
import './404.css';

const NotFoundPage = () => (
    <Layout>
        <SEO title='Page introuvable' />
        <section className='not-found'>
            <h1>Malheureusement, cette page est introuvable.</h1>
            <p>Merci de vérifier l'URL et de réessayer.</p>
            <a href='/'>Retour à la page d'accueil</a>
        </section>
    </Layout>
);

export default NotFoundPage;
