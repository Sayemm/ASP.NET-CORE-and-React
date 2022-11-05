import { Link } from "react-router-dom";

export default function IndexGenres() {
    return (
        <div>
            <h3>Genres</h3>
            <Link className="btn btn-primary" to="/genres/create">Create Genre</Link>
            <br /> <br />
            <Link className="btn btn-primary" to="/genres/edit">Edit Genre</Link>
        </div>
    );
}