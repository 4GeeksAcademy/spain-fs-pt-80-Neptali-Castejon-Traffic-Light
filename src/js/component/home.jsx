import React from "react";
import "../../styles/index.css";
import { Traffic } from "./traffic";
import { lightsData } from "../data";

const Home = () => {
    return (
        <Traffic lightsData={lightsData} />
    );
};

export default Home;
