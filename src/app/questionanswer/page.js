'use client';

import { React } from 'react';
import { useRouter } from 'next/navigation';

const QuestionAnswer = () => {
	const navigate = useRouter();
	const state = navigate.state;
	console.log(navigate);

	return (
		<>
			<h4>Here is your Q/A</h4>
		</>
	);
};
export default QuestionAnswer;
