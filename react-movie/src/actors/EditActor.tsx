import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <div>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Tom Holland",
          dateOfBirth: new Date("1996-05-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
      />
    </div>
  );
}
