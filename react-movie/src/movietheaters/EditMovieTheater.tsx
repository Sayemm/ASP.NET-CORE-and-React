import MovieTheterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <div>
      <h3>Edit Movie Theater</h3>
      <MovieTheterForm
        model={{ name: "Sambil" }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
}
