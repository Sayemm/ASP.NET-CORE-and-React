import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <div>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Tom Holland",
          dateOfBirth: new Date("1996-05-01T00:00:00"),
          biography: "# Name = **Sayem**",
          pictureURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/220px-Thomas_Edison2.jpg",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
}
