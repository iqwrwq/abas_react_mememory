import '../styles/index.css'
import '../styles/globals.css'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Afterwork-Beer Meme-Memory</title>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
