'use client'
import Image from "next/image";
import React from "react";
import Card from "./components/card"; 
import { useRandomAPI } from "./hooks/useRandomAPI"; 

const Page: React.FC = () => {
    const { data, loading, error, fetchData } = useRandomAPI(); 

    const handleGenerateUser = async () => {
      await fetchData(); 
    };

    const user = data?.results?.[0]; // Access the first user from the results array

    const exampleIcons = [
        'https://via.placeholder.com/24',
        'https://via.placeholder.com/24',
        'https://via.placeholder.com/24',
    ];

    return (
        <div>
            <h1>My Page</h1>
            {user && (
                <Card
                    imageSrc={user.picture.large}
                    name={`${user.name.first} ${user.name.last}`}
                    icons={exampleIcons}
                />
            )}
            <button onClick={handleGenerateUser} disabled={loading}>
                {loading ? "Loading..." : "Generate Random User"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Page;