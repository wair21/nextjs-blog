import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from '../../components/layout';

export default function FirstPost() {
    function onLoadScript() {
            
    }

    return (
        <Layout>
            <Head> 
                <title>
                    head title
                </title>
            </Head>
            <h1>First Post</h1>
            <Link href="/"> back home </Link>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnLoad"
                onLoad={onLoadScript()}
            />

        </Layout>
    )
}