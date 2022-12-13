import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeAheadActors(props: typeAheadActorsProps) {
    const actors: actorMovieDTO[] = [
        {
            id: 1,
            name: "Sayem",
            character: "",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg",
        },
        {
            id: 2,
            name: "Rukon",
            character: "",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/220px-Dwayne_Johnson_2014_%28cropped%29.jpg",
        },
        {
            id: 3,
            name: "Opu",
            character: "",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/220px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
        },
        {
            id: 4,
            name: "Shihab",
            character: "",
            picture:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Logan_Japan_Premiere_Red_Carpet-_Hugh_Jackman_%2838445328406%29_%28rotated%29.jpg/220px-Logan_Japan_Premiere_Red_Carpet-_Hugh_Jackman_%2838445328406%29_%28rotated%29.jpg",
        },
    ];
    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                options={actors}
                onChange={(selectedActors) => {
                    if(selectedActors.length) {
                        const actors = selectedActors as actorMovieDTO[];
                        if (
                            props.actors.findIndex((x) => x.id === actors[0].id) ===
                            -1
                        ) {
                            props.onAdd([...props.actors, actors[0]])
                        }
                    }
                    console.log(selectedActors);
                }}
                labelKey="name"
                placeholder="Write the name of the actor..."
                minLength={1}
                flip={true}
            />
            <ul className="list-group">
                {props.actors.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </ul>
        </div>
    );
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
}
