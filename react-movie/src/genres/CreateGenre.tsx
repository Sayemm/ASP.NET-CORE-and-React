import GenreForm from "./GenreForm";

export default function CreateGenre() {
  return (
    <div>
      <h3>Create Genre</h3>

      <GenreForm
        model={{ name: ""}}
        onSubmit={async (value) => {
          await new Promise((r) => setTimeout(r, 3000));
          //when the form is posted
          console.log(value); //value is an object with the information of the form
        }}
      />
    </div>
  );
}
