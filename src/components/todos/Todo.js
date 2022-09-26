export default function Todo(props) {
    let {item: todo} = props;

    return (
        <div>
            <h3>{todo.id}. {todo.title}</h3>
        </div>
    );
}