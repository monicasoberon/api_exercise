'use client'
import Image from "next/image";
import React from "react";
import Card from "./components/card"; 
import { usePeopleApi } from "./hooks/usePeopleApi"; 

const Page: React.FC = () => {
    const { currentPerson, personHistory, error, loading, fetchData } = usePeopleApi() 

    if (error) return <div>Error loading data</div>;



    const exampleIcons = [
        'https://via.placeholder.com/24',
        'https://via.placeholder.com/24',
        'https://via.placeholder.com/24',
    ];

    return (
        <div>
            <h1>Current Person</h1>
            {currentPerson && (
                <Card
                    imageSrc={currentPerson.picture}
                    name={currentPerson.name}
                    icons={exampleIcons}
                />
            )}
            <button onClick={fetchData} disabled={loading}>
                {loading ? "Loading..." : "Generate Random User"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Page;