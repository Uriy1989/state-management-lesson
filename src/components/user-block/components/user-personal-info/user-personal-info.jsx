//import { use } from 'react';
//import { AppContext } from '../../../../context'; //теперь считаем его из stare

import { store } from '../../../../store';

export const UserPersonalInfo = () => {
	//{ name, age }

	//const { userData, dispatch } = use(AppContext);
	//const { name, age, email, phone } = userData;	из context
	const { name, age } = store.getState();
	const onUserUpdate = () => {
		const { name, email, phone } = store.getState();
		const newUserData = { name, age: 25, email, phone };
		//setUserData({ name, age: 25, email, phone });
		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};
	const onUserAge = () => {
		store.dispatch({ type: 'SET_USER_AGE', payload: 15 });
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
