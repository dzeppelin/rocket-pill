import Head from "next/head";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
            <h1 className="hello text-clip font-mono text-sm text-inherit">
                Hello World
            </h1>
        </div>
    );
};

export default Home;
