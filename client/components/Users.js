import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";

const GET_USERS_QUERY = gql`
  query GetUsersQuery($page: Int) {
    users(page: $page) {
      name
      email
      address
      phone
      id
    }
  }
`;

const Users = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  const { data, loading, error } = useQuery(GET_USERS_QUERY, {
    variables: { page },
  });

  useEffect(() => {
    if (data && data.users) {
      const { users } = data;
      setPeople([...people, ...users]);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {data &&
          people.length > 0 &&
          people.map((person) => {

            const { name, address, email, phone } = person;

            return (
              <div key={person.id} className="card col-2" style={{ margin: "5px" }}>
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{address}</p>
                  <p className="card-text">{email}</p>
                  <p className="card-text">{phone}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="row">
        <div
          onClick={() => {
            setPage(page + 1);
          }}
          className="load-more"
          style={{
            padding: "10px",
            background: "#ccc",
            border: "1px solid #000",
            textAlign: "center",
          }}
        >
          + load more
        </div>
      </div>
    </div>
  );
};

export default Users;
