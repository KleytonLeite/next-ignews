import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
                        <p>bureu2biur2bfvo2yho2yv2ouyvbruyevbu2ur7ruhrjh93jnfor2yfgor2yf</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
                        <p>bureu2biur2bfvo2yho2yv2ouyvbruyevbu2ur7ruhrjh93jnfor2yfgor2yf</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
                        <p>bureu2biur2bfvo2yho2yv2ouyvbruyevbu2ur7ruhrjh93jnfor2yfgor2yf</p>
                    </a>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
                        <p>bureu2biur2bfvo2yho2yv2ouyvbruyevbu2ur7ruhrjh93jnfor2yfgor2yf</p>
                    </a>
                    
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ],{
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}