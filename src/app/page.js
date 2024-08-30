'use client';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

export default function Home() {
	const navigate = useRouter();
	const [randomwords, setRandomwords] = useState();

	const handleGetQuestionAnswer = () => {
		if (randomwords?.length > 0) {
			navigate.push('/questionanswer?user="true"');
		}
	};

	return (
		<>
			<h1 className="m-4 p-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				<span className="text-transparent bg-clip-text bg-gradient-to-r bg-to-emerald-600 from-sky-400">
					Select Your{' '}
				</span>
				Question-Answer List.
			</h1>
			<textarea
				value={randomwords}
				onChange={(event) => {
					setRandomwords(event?.target?.value);
				}}
				className="w-full h-44 p-4 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-emerald-400"
				placeholder="Enter your text here..."
			></textarea>
			<button
				onClick={handleGetQuestionAnswer}
				className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			>
				Get
			</button>
		</>
	);
}
