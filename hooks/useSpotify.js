import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import spotifyApi from '../lib/spotify';

const useSpotify = () => {
	const { data: session, status } = useSession();

	useEffect(() => {
		if (session) {
			// If refresh access token attemp fails, direct user to login
			if (session.error === 'RefreshAccessTokenError') {
				signIn();
			}

			spotifyApi.setAccessToken(session.user.accessToken);
		}
	}, [session]);

	return spotifyApi;
};

export default useSpotify;
