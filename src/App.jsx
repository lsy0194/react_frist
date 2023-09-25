import Header from './components/Header';
import Footer from './components/Footer';
import Popup from './components/Popup';
import List from './components/List';
import './style.scss';

//원시형자료는 : 메모리 값자체가 callstack에서 생성된 다음에 저장
//원시형자료는 변수값을 다른 변수에 복사했을때 값 자체가 복사되는 deep copy;
//복사된 값을 변경해도 원본은 그대로 유지되는 불변성 유지(immutable);

//참조형 자료는 : 메모리(callstack),배열,객체등의 값자체는 (heap memory) 생성돔
//callstack에 있는 메모리에는 배열의 값 자체가 아닌  heap memory에 있는 값에 위치값이 담김
//참조링크가 담겨있는 변수를 새로운 변수에 옮겨담으면 값이 복사는것이 참조 링크만 복사됨
//결국 같은값을 가리키고 있는 두개의링크만 복사가 됨
//복사가 된 링크의 값을 바꾸면 결국원본값이 회손됨(shallow copy) 불변성 유지 안됨

//리엑트 개발시 불션성이 중요한이유
//리엑트는 원본이 있어야 복사본을 통해서 차이점을 비교분석
//리엑트에서 배열이나 객체같은 참조형 자료는 무조건 deep copy를 해서 데이터를 변경해야함

function App() {
	let isPop = true;
	let isFooter = true;
	return (
		<>
			<Header />
			{isFooter && <Footer />}
			{isPop ? <Popup /> : null}
			<List />
		</>
	);
}

export default App;

/*
	hooks
	-리액트 16버전부터 새로나온 개념으로 리액트에서 자주쓰이는 상태관리, 생명주기에 관련된 내용들을 
	-hook이라는 형태의 내장함수로 편의기능을 제공
	-hook이 나오기 전까지는 class방식으로 컴포넌트를 생성 및 기능확장을 비효율적으로 처리

	자주쓰는 hook 3대장
	useState - 컴포넌트에서 화면의 렌더링을 담당하는 중요한 정보값을 관리
	useEffect - 컴포넌트의 생명주기에 관련된 함수 (생성,변화,소멸)
	useRef - 컴포넌트 안쪽에서 특정 값을 참조객체에 담을때

	리액트 성능관리를 hook
	리액트에서의 memoization - 메모리점유율을 늘려서 성능을 개선
	자바스크립트는 기본적으로 Garbage collector에 의해서 메모리가 관리됨
	아래의 hook을 통해서 특정값을 강제 메모이제이션 처리하면 가비지컬렉터에서 제외함
	memo (컴포넌트 자체를 메모이제이션)
	useCallback (컴포넌트 안쪽의 핸들러 함수 자체를 메모이제이션)
	useMemo (특정 핸들러함수의 리턴값을 메모이제이션)
*/
