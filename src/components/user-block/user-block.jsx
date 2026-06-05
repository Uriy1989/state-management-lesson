import { UserPersonalInfo, UserContacts } from './components';
export const UserBlock = () => {
	return (
		<div>
			<h2>Пользователь:</h2>
			<UserPersonalInfo />
			<UserContacts />
		</div>
	);
};

/*import { use } from 'react';

import { UserPersonalInfo, UserContacts } from './components';
import { AppContext } from '../../context';
export const UserBlock = () => {
	//{ name, age, email, phone }
	const { name, age, email, phone } = use(AppContext);
	return (
		<div>
			<h2>Пользователь:</h2>
			<UserPersonalInfo name={name} age={age} />
			<UserContacts email={email} phone={phone} />
		</div>
	);
}; */
