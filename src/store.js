//import {} from '';

//основной функционал бибилиотеки
import { appReducer } from './reducer';

const createStore = (reducer) => {
	//initialState убираем из-за state = initialState
	let state;
	return {
		dispatch: (action) => {
			//должен подхватить reducer и возвратить новый sate в store
			state = reducer(state, action); //обновляем текущй state

			console.log(state);
		},
		getState: () => state,
	};
};
//можем вынести текущий  state в замыкание
//везде где нам нужно получаем актуальный state c возможностью его изменить

export const store = createStore(appReducer);

store.dispatch({}); //INITIAL его нет и но не будет ошибки из-за отсутсвия initialState { type: 'INITIAL' }

//обновление компонентов пакет redux нужен при обновлений state в store редарились компоненты

//export const store = createStore(appReducer);использовать текущий state и отправлять action
/*
с initialState

import { appReducer, initialState } from './reducer';

const createStore = (reducer, initialState) => {//initialState убираем из-за state = initialState
	let state = initialState;
	return {
		dispatch: (action) => {
			//длжен подхватить reducer и возвратить новый sate в store
			state = reducer(state, action); //обновляем текущй state
		},
		getState: () => state,
	};
};
//можем вынести текущий  state в замыкание
//везде где нам нужно получаем актуальный state c возможностью его изменить

const store = createStore(appReducer, initialState); */
