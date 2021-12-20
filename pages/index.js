import { getSession } from 'next-auth/react';
import Center from '../components/Center';
import SideBar from '../components/SideBar';
import Player from '../components/Player';

export default function Home() {
	return (
		<div className='bg-black h-screen overflow-hidden'>
			<main className='flex'>
				<SideBar />
				<Center />
			</main>
			<div className='sticky bottom-0'>
				<Player />
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}
