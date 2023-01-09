import { Link } from "react-router-dom";
import { useContactsData, useDeleteContact } from "./Contacts";

export const Home = () => {
  const onSuccess = (res) => {
    console.log("affect after fetching");
  };
  const onError = () => {
    console.log("affect after error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useContactsData(onSuccess, onError);

  const { mutate: deleteMethod } = useDeleteContact();

  const deleteContact = (id) => {
    deleteMethod(id);
  };

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading || isFetching) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      <button style={{ backgroundColor: "lightgreen" }} onClick={refetch}>
        Get all users
      </button>
      {data?.data.map((contact) => {
        return (
          <div key={contact.id} style={{ marginTop: "30px" }}>
            <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
            <button
              onClick={() => {
                deleteContact(contact.id);
              }}
              style={{ backgroundColor: "lightgreen" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
