'use client';

import { iCardInfo } from '@/app/page';
import React, { useState } from 'react';

async function ApiCall(apiCode: string) {
	const url = `https://httpstat.us/200`;
	const response = await fetch(url);

	console.log('%c DATA form call', 'color:aqua', response);
	return response;
}

export default function CardComponent(props: iCardInfo) {
	const { apiCode, color, description, title } = props;

	const [isApiLoading, setisApiLoading] = useState<boolean>(false);
	const [apiStatus, setapiStatus] = useState<string>('');

	function handleButtonPress(apiCode: string) {
		setisApiLoading(true);
		setapiStatus('');

		ApiCall(apiCode)
			.then((res) => {
				console.log('%c RES is: ', 'color:lime', res.status, res.statusText);
				setapiStatus(`${res.status} ${res.statusText}`);
			})
			.catch((err) => {
				console.log('%c ERROR is: ', 'color:lime', err);
				setapiStatus('Error occured during api call');
			})
			.finally(() => setisApiLoading(false));
	}

	return (
		<div className={`flex flex-col justify-center items-center p-2 border-2 border-gray-500 rounded-2xl shadow-md shadow-gray-400 ${color} `}>
			<div>{title}</div>

			<div className='text-center'>{description}</div>

			<div> {isApiLoading ? 'Loading Api call' : ''}</div>

			{!isApiLoading && apiStatus.length > 0 && <div>Response: {apiStatus}</div>}

			<button className='p-2 underline underline-offset-2' onClick={() => handleButtonPress(apiCode)}>
				Trigger api call
			</button>
		</div>
	);
}
