import { useState, useEffect } from "react";

export default function ApiCall(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setData(data);
            setLoading(false);
        });
    }, [])

    if(loading) return <p>Loading....</p>

    return (
        <>
            <h2>API Call Example</h2>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}