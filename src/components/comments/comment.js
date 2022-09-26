import {Link} from "react-router-dom";

export default function Comment(props) {
    let {item: comment} = props;

    return (
        <div>
            <Link to={'posts/' + comment.postId}>{comment.name}</Link>
            <h4>{comment.body}</h4>
            <h3>{comment.email}</h3>
            <hr/>
        </div>
    );
}