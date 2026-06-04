import { ThemeContext } from './components/context/theme-context';
import { UserContext } from './components/context/user-context';
import { AppConfigContext } from './components/context/app-config-context';

export const AppContextProvider = ({
	themeValue,
	userValue,
	appConfigValue,
	children,
}) => (
	<ThemeContext value={themeValue}>
		<UserContext value={userValue}>
			<AppConfigContext value={appConfigValue}>
				{children}
			</AppConfigContext>
		</UserContext>
	</ThemeContext>
);
