import axios from 'axios';


export async function getStaticPaths() {
  const groups = [
    {
      id: 1,
      name: "Group 1"
    },
    {
      id: 2,
      name: "Group 2"
    },
    {
      id: 3,
      name: "Group 3"
    },
    {
      id: 4,
      name: "Group 4"
    },
    {
      id: 5,
      name: "Group 5"
    },
  ]

  // Get the paths we want to pre-render based on posts
  const paths = groups.map((group) => `/group/${group.id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

const fetchData = async () => await axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => ({
    error: false,
    users: res.data,
  }))
  .catch(() => ({
      error: true,
      users: null,
    }),
  );


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Users = ({ users, error, randomId, groupId }) => {
  return (
    <section>
      <header>
        <h1>List of users</h1>
      </header>
      <h2>id: {randomId}</h2>
      <h2>groupId: {groupId}</h2>
      <h3>With getStaticProps you don't have to stop relying on dynamic content, as static content can also be dynamic. Incremental Static Regeneration allows you to update existing pages by re-rendering them in the background as traffic comes in.</h3>
      {error && <div>There was an error.</div>}
      {!error && users && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await fetchData();

  data.randomId = makeid(10);
  data.groupId = params.id;
  return {
    props: data,
    revalidate: 5,
  };
}

export default Users;
