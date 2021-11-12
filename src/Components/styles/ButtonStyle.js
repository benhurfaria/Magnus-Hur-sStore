import styled from "styled-components"

const Button = styled.button`
	width: ${(props) => (props.size === "modal" || props.size === "buy") ? '20vw' : '90vw'};
    height: 46px;

	color: #ffffff;
	font-size: 20px;

	font-weight: bold;

	border-radius: 5px;
	border: none;
	background-color: #326273;

	margin-bottom: 20px;

	cursor: pointer;

	@media (max-width: 1100px) {
        width: ${(props) => props.size === "buy" ? '90vw' : ''};
		margin-bottom: 0;
    }
`;

export {
    Button
}