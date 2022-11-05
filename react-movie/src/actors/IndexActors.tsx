import { Link } from "react-router-dom";

export default function IndexActors() {
    return (
        <div>
            <h3>Actors</h3>
            <Link className="btn btn-primary" to="/actors/create">Create Actor</Link>
            <br /> <br />
            <Link className="btn btn-primary" to="/actors/edit">Edit Actor</Link>
        </div>
    );
}