'use client'

import Image from "next/image";
import React, { useState } from "react";
import Card from "./components/card"; 
import { useRandomAPI } from "./hooks/useRandomAPI"; 

const Page: React.FC = () => {
    const { data, loading, error, fetchData } = useRandomAPI(); 

    const handleGenerateUser = async () => {
      await fetchData(); 
    };

    const exampleImageSrc = 'https://via.placeholder.com/300';
    const exampleName = 'Example Card';
    const exampleIcons = [
        'https://via.placeholder.com/24',
        'https://via.placeholder.com/24',
        'https://via.placeholder.com/24',
    ];

    return (
        <div>
            <h1>My Page</h1>
            <Card
                imageSrc={exampleImageSrc}
                name={exampleName}
                icons={exampleIcons}
            />
            <button onClick={handleGenerateUser} disabled={loading}>
                {loading ? "Loading..." : "Generate Random User"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Page;