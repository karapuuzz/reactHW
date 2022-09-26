import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/comments";
import Post from "./components/posts/post";
function App() {

    return (<div>
        <hr/>
        <ul>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'todos'}>to do list</Link></li>
            <li><Link to={'albums'}>albums</Link></li>
            <li><Link to={'comments'}>comments</Link></li>
        </ul>
        <hr/>

        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'albums'} element={<Albums/>}/>
            <Route path={'comments'} element={<Comments/>}/>
            <Route path={'comments/posts/:id'} element={<Post/>}/>
        </Routes>
    </div>);

}
export default App;
