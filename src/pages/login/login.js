import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { signIn } from '../../features/userSlice';
import styles from  './login.module.css';


const Login = () => {
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const history = useHistory();
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(signIn({
			userName,
			password
		}))
		history.push('/profile')
	}

	return (
		<div className={styles.wrapper}>
			<h1>Login 👤</h1>
			<form 
				className={styles.login__form}
				onSubmit={(e) => handleSubmit(e)}	
			>
				<input 
					type="name" 
					placeholder="username" 
					value={userName} 
					onChange={(e) => setUserName(e.target.value)}
				/>
				<input 
					type="password" 
					placeholder="password" 
					value={password} 
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" disabled={userName !== 'developer21' || password !== '123456'}>Login</button>
			</form>
		</div>
	);
}

export default Login;
