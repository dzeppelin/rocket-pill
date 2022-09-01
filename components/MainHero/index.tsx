import type { NextPage } from "next";
import Image from "next/image";

const MainHero: NextPage = () => {
    return (
        <div className="header">
            {/* The main header text */}
            <div className="mb-5 flex flex-row justify-center">
                <Image src="/0_hero.gif" width="530px" height="295px" />
            </div>
            {/* The text underneath the header */}
            <p className="mb-5 text-clip text-center">
                The purpose of this website is to help you to get into a flow
                state while studying. It doesn&apos;t have any specific number
                of features. We are just trying to make it as comfortable as
                possible and enlighten you.
            </p>
            <div className="buttons flex flex-row justify-center">
                <button
                    type="button"
                    className="rounded border border-gray-400 bg-white py-1 px-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
                >
                    Button
                </button>
            </div>
        </div>
    );
};

export default MainHero;
