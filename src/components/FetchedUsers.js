import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../store/users/usersSlice'

const FetchedUsers = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default FetchedUsers;
