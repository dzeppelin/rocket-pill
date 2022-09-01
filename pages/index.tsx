import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
import MainHero from "../components/MainHero";

const Home: NextPage = () => {
    return (
        <div className="mx-auto max-w-2xl">
            <Head>
                <title>Home Page</title>
            </Head>
            {/* Top */}
            <Header />

            {/* Content */}
            <MainHero />

            {/* Bottom */}
            <Footer />
        </div>
    );
};

export default Home;
