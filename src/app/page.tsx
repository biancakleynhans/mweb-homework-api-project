import CardComponent from '@/components/CardComponent';

export interface iCardInfo {
	title: string;
	apiCode: string;
	description: string;
	color: string;
}

const CallingCards: iCardInfo[] = [
	{ title: 'Sucess', apiCode: '200', description: 'Sucess code call using 200', color: 'bg-green-400' },
	{ title: 'Sucess with time out', apiCode: '200?sleep=10000', description: 'Sucess code call using 200', color: 'bg-green-600' },
	{ title: 'Bad Request', apiCode: '400', description: 'Bad Request code call using 400', color: 'bg-red-400' },
	{ title: 'Not Found', apiCode: '404', description: 'Not Found code call using 404', color: 'bg-purple-400' },
	{ title: 'Internal Server Error', apiCode: '500', description: ' Internal Server Error code call using 500', color: 'bg-yellow-400' },
	{ title: 'Gateway Timeout', apiCode: '504', description: 'Gateway Timeout code call using 504', color: 'bg-orange-400' },
];

export default function Home() {
	return (
		<div className='w-full p-2 flex flex-col justify-center items-center'>
			<div className='text-purple-400 text-2xl text-center pb-5'>Homework task MWEB by Bianca</div>

			<div className='w-full gap-2 flex flex-row flex-wrap desktop:flex-nowrap justify-center items center'>
				{CallingCards.map((card, index) => (
					<CardComponent key={index} apiCode={card.apiCode} color={card.color} description={card.description} title={card.title} />
				))}
			</div>
		</div>
	);
}
