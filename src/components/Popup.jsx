import { useEffect } from 'react';

function Popup() {
	useEffect(() => {
		console.log('팝업생성');
	}, []);
	return <aside>Popup</aside>;
}

export default Popup;
