import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Post() {
    let {id} = useParams();
    let [post, setPost] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost(value)
            });
    });

    return (
        <div>
           <h3>{post.id} {post.title}</h3>
            <h5>{post.body}</h5>
        </div>
    );
}