//import { use } from 'react';
//import { AppContext } from '../../../../context';

import { store } from '../../../../store';

export const UserContacts = () => {
	//{ email, phone }

	//const { userData, dispatch } = use(AppContext);
	//const { email, phone } = userData;

	const { email, phone } = store.getState();
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
