export const Render = (type) => {
	console.log('type', type.state);
	let typeBuff;
	typeBuff = type.state;
	console.log(typeof typeBuff, 'qdd');
	if (typeof typeBuff === 'string') return <div>выбран тип {typeBuff}</div>;
};
