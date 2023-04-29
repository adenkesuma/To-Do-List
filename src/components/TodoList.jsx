import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function TodoList() {
    const {id} = useParams();

    return (
        <div>
            <Navbar />
            <p>{id}</p>
        </div>
    )
}
