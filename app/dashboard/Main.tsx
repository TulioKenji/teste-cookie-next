'use client';

import { useEffect, useRef } from "react";

export default function MainDashboard() {
    const result = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch(`http://localhost:3000/api/cookieController`, {
                method: 'POST',
            });
            result.current!.textContent = `Response status: ${res.status}`;
        };
        fetchApi();
    }, []);
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard Main</h1>
            <p ref={result}>{result.current?.textContent || "Loading..."}</p>
        </main>
    );
}