'use client'
import { useEffect, useState } from "react";
import { User, APIResponse } from "../types/api_types"; 

export const useRandomAPI = (url = "https://api.randomuser.me/") => {
    const [data, setData] = useState<APIResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
            const result: APIResponse = await response.json();
            setData(result);
            return result; // Return the fetched data
        } catch (error) {
            setError("Error fetching data");
            return null;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data on initial load (optional)
    }, [url]);

    return { data, loading, error, fetchData }; // Expose fetchData for manual triggering
};