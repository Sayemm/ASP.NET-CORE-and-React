import MovieTheterForm from "./MovieTheaterForm";

export default function CreateMovieTheater() {
  return (
    <div>
      <h3>Create Movie Theater</h3>
      <MovieTheterForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
}
