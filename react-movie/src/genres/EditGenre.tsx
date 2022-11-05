import { useParams } from "react-router-dom";
import GenreForm from "./GenreForm";

export default function EditGenre() {
    const {id}: any = useParams();
    return (
        <div>
            <h3>Edit Genre</h3>
            <GenreForm
        model={{ name: "Action"}}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 3000));
          //when the form is posted
          console.log(id);
          console.log(value); //value is an object with the information of the form
        }}
      />
        </div>
    );
}