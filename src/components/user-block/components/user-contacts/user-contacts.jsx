import { use } from 'react';
import { AppContext } from '../../../../context';

export const UserContacts = () => {
	//{ email, phone }

	const { userData, dispatch } = use(AppContext);
	const { name, age, email, phone } = userData;

	// const onUserUpdate = () => {
	// 	const newUserData = { name, age: 25, email, phone };
	// 	//setUserData({ name, age: 25, email, phone });
	// 	dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	// };

	//const { email, phone } = use(AppContext);
	return (
		<div>
			<h3>Контакты:</h3>
			<div>Почта: {email}</div>
			<div>Телефон:{phone}</div>
		</div>
	);
};
