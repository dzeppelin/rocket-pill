import type { NextPage } from "next";

const Header: NextPage = () => {
    return (
        <div className="header mb-8 mt-2 flex flex-row justify-between">
            <p className="italic">Talapov&apos;s Production</p>
            <p className="italic">Rocket Pill</p>
        </div>
    );
};

export default Header;
