import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledHeader = styled.header`
	align-items: center;
	background-color: #1fcbe2;
	color: #ffffff;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	padding: 1rem;
	width: 100%;
`;

const StyledTitle = styled.h1`
	font-size: 1.8rem;
	font-weight: 300;
	margin: 0;
`;

const StyledDate = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
`;

let placeholder = moment().format('DD/MM/YYYY HH:MM');

export default ({ title, date }) => (
	<StyledHeader>
		<StyledTitle>{title}</StyledTitle>
		<StyledDate>{date || placeholder}</StyledDate>
	</StyledHeader>
);
