import MovieTheterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <div>
      <h3>Edit Movie Theater</h3>
      <MovieTheterForm
        model={{
          name: "Sambil",
          latitude: 23.79253842351483,
          longitude: 90.34512519836426,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
}
