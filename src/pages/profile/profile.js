import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signOut, selectUser } from '../../features/userSlice';
import styles from  './profile.module.css';

const Profile = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const history = useHistory();

  const hadnleLogout = (e) => {
    e.preventDefault();

    dispatch(signOut())
    history.push('/')
  }

  return (
    <div className={styles.wrapper}>
      <h1>Hi {user?.userName}</h1>
      <button onClick={(e) => hadnleLogout(e)}>Logout</button>
    </div>
  );
}

export default Profile;