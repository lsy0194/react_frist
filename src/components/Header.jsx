//rfce
function Header() {
	const handler = (text) => {
		console.log(text);
	};
	return (
		//한줄 주석
		<header>
			{/*JSX 안쪽 주석*/}
			<h1 className='title'>Logo</h1>
			<p onClick={() => handler('hello')}>링크</p>
		</header>
	);
}

export default Header;
