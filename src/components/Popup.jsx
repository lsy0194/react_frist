import { useEffect } from 'react';
import { useState } from 'react';
//uesEffect:컴포넌트 생성,변화,소멸의 특정 상태마다 원하는 이벤트를 연결가능
//useEffect(실행할함수,의존성배열)
//의존성배열이 비어있는 상태에서 함수안쪽에 구문을 입력하면 (컴포넌트 마운트시 한번만 실행)
//실사용 사례 - 팝업생성시 스크롤바 제거
//실사용 사례 - 특정 컴포넌트가 마운트 되었을때만 스크롤 이벤트 연결

//의존성배열이 비어있는 상태에서 리턴되는 함수 안쪽에 구문을 입력하면 (컴포넌트 언마운트시 한번만 실행)
//실사용 사례 - 팝업생성시 스크롤바 생성
//실사용 사례 - 특정 컴포넌트가 언마운트 되었을때 스크롤 이벤트 제거

//의존성배열에 특정 state를 담아두고 함수 안쪽에 구문을 입력하면 (해당 state값이 변경돨때마다 실행)
//특정 이벤트가 발생해서 새로운 데이터를 fetching할 때마다 로딩바 출력

function Popup() {
	console.log('팝업재호출');
	const [Num, setNum] = useState(0);

	useEffect(() => {
		//컴포넌트 mount시 한번만 실행
		console.log('팝업생성');
		console.log('무거운 유튜브 데이터 fetching');

		return () => {
			//컴포넌트가 unmount시 한번만 실행
			console.log('팝업소멸');
		};
	}, []);

	useEffect(() => {
		console.log('popup의 Num 상태변화');
	}, [Num]);

	return (
		<aside>
			<h1>{Num}</h1>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
		</aside>
	);
}

export default Popup;
