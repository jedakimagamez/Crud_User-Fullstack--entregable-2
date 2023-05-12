import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import axios from 'axios';
import WarningDelete from './components/WarningDelete';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [alert, setAlert] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get('http://localhost:8080/users').then((res) => setUsersList(res.data));
  };

  const selectUser = (user) => {
    setShowForm(true);
    setUserSelected(user);
  };

  const showWarning = (user) => {
    setAlert(true);
    setUserToDelete(user);
  };

  const deleteUser = (user) => {
    axios.delete(`http://localhost:8080/users/${user.id}`).then(() => {
      getUsers();
      setAlert(false);
    });
  };

  const cancelDelete = () => {
    setUserToDelete(null);
    setAlert(false);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setUserSelected(null);
  };

  return (
    <div className="App">
      {showForm && (
        <UserForm getUsers={getUsers} userSelected={userSelected} setUserSelected={setUserSelected} closeForm={closeForm} />
      )}
      <UserList usersList={usersList} selectUser={selectUser} openForm={openForm} showWarning={showWarning} />
      {alert && (
        <WarningDelete alert={alert} userToDelete={userToDelete} deleteUser={deleteUser} cancelDelete={cancelDelete} />
      )}
      <footer>
        <p>
          By <strong>Jesus Agamez</strong> | G-23 Academlo
        </p>
      </footer>
    </div>
  );
}

export default App;
