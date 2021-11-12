import styled from "styled-components"

const Button = styled.button`
	width: ${(props) => props.size === "modal" ? '20vw' : '90vw'};
    height: 46px;

	color: #ffffff;
	font-size: 20px;

	font-weight: bold;

	border-radius: 5px;
	background-color: #326273;

	margin-bottom: 20px;

	cursor: pointer;
`;

export {
    Button
}