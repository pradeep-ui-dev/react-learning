import React, {useState, useEffect} from 'react';

function FetchData() {
    
    /*const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            setLoading(false)
        })
        .catch(error => {
            console.log(`Fetching API Data: ${error}`)
        })
    }, [])

    return (
        <div>
            <h1>API Data Fetching</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )*/

    //Fetch data for a single user from the same API (https://jsonplaceholder.typicode.com/users/1) and display their name, email, and phone number.
    /*const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json())
        .then(data => {
            setUser(data);
            setLoading(false)
        })
        .catch(err => {
            console.log(`API Fetching data: ${err}`)
        })
    }, [])

    return (
        <div>
            <h1>Single User Data:</h1>
            {loading ? (<p>Loading...</p>) : (
                <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                </div>
            )}
        </div>
    )*/
   //Fetch the posts of a specific user from the API endpoint https://jsonplaceholder.typicode.com/posts?userId=1 and display them in a list. Include the title and body for each post.
   const [userPosts, setUserPosts] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then(response => response.json())
        .then(data => {
            setUserPosts(data);
            setLoading(false)
        })
        .catch(error => {
            console.log(`Fetching API Data: ${error}`)
        })
   }, [])
   return (
    <div>
        {loading ? (<p>Loading...</p>) : (
            <div>
                {userPosts.map((user) => (
                    <div key={user.id}>
                        <p className='font-bold'>{user.title}</p>
                        <p>{user.body}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
   )
}

export default FetchData