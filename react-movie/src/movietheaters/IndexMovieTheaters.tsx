import { Link } from "react-router-dom";

export default function IndexMovieTheaters() {
    return (
        <div>
            <h3>Movie Theaters</h3>
            <Link className="btn btn-primary" to="/movietheaters/create">Create Theater</Link>
            <br /> <br />
            <Link className="btn btn-primary" to="/movietheaters/edit">Edit Theater</Link>
        </div>
    );
}