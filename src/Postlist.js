import { useEffect, useState } from "react";
import Post from "./Post"

function Postlist() {
    useEffect(() => {
        async function getPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            console.log(data);
            setAllPosts(data);
        }
        getPosts();
    }, []);

    const [allPosts, setAllPosts] = useState([]);
    const allpostsJSX = allPosts.map((post, index) =>  {
    return <Post key={index} {...post}/>;
    });
    return (<div>
        {allpostsJSX}
        </div>);
}

export default Postlist