import { CurrentUser } from './components';

//	<CurrentUser currentUser={currentUser} /> - уже ненужен проброс пропсов

export const Header = () => {
	return (
		<div>
			<div>Информация в шапке приложения</div>
			<CurrentUser />
		</div>
	);
};
