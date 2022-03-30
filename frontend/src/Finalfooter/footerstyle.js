import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: black;

bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	max-width: 1000px;
	/* height: 6328px;
	width: 1200px; */
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;
export const Column2 = styled.div`
display: flex;
gap:18px;
text-align: left;
margin-left: 60px;
`;
export const Row2 = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 140px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;
export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;
export const Row3 = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
						grid-gap: 150px;
						margin-left: -70px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;


export const Heading = styled.p`
font-size: 14px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;

`;
