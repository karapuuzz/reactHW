export default function Album(props) {
    let {item: album} = props;

    return (
        <div>
            <h3>{album.id}. {album.title}</h3>
        </div>
    )
}