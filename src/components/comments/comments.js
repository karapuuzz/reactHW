import {getComments} from "../../services/comments.services/comments.api";
import {useEffect, useState} from "react";
import Comment from "./comment";
export default function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value))
    });
    return (
        <div>
            {comments
                .map((comment, index) => (<Comment
                    item={comment}
                    key={index}
                />))}
        </div>
    );
}