import {getAlbums} from "../../services/albums.services/albums.api";
import {useEffect, useState} from "react";
import Album from "./Album";
export default function Albums() {
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(value => setAlbums(value))
    });

    return (
        <div>
            {albums
                    .map((album, index) => (<Album
                    item={album}
                    key={index}/>))}
        </div>
    );
}