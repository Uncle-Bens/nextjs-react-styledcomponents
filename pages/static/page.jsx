const users = [
  {
    username: 'test',
    email: 'test@test.com',
    name: 'test name',
  },
  {
    username: 'test',
    email: 'test@test.com',
    name: 'test name',
  },
  {
    username: 'test',
    email: 'test@test.com',
    name: 'test name',
  },
];

const Users = () => (
  <section>
    <header>
      <h1>List of users</h1>
    </header>
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
  </section>
);

export default Users;