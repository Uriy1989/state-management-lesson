import { use } from 'react';
import { AppContext } from '../../../../context';

export const UserPersonalInfo = () => {
	//{ name, age }

	const { userData, dispatch } = use(AppContext);
	const { name, age, email, phone } = userData;

	const onUserUpdate = () => {
		const newUserData = { name, age: 25, email, phone };
		//setUserData({ name, age: 25, email, phone });
		dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};
	const onUserAge = () => {
		dispatch({ type: 'SET_USER_AGE', payload: 15 });
	};

	return (
		<div>
			<h3>Персональные данные:</h3>
			<div>Имя: {name}</div>
			<div>Возраст:{age}</div>
			<button onClick={onUserUpdate}> Обновить пользователя</button>
			<button onClick={onUserAge}> Обновить возраст</button>
		</div>
	);
};
