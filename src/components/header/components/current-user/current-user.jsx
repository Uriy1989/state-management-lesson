//import { use } from 'react';
//import { AppContextProvider } from '../../../../app-context';
//import { AppContext } from '../../../../context';
import { store } from '../../../../store';
//export const CurrentUser = ({ currentUser }) => { удалили по понятным причинам
export const CurrentUser = () => {
	// деструктуризация объекта useData
	//const { name } = use(AppContext);
	const { name } = store.getState();

	return (
		<div>
			<div>Текущий пользователь : {name}</div>
		</div>
	);
};
