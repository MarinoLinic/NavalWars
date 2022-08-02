import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { UserProvider } from '@auth0/nextjs-auth0'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<UserProvider>
				<title>Naval Wars</title>
				<meta name="description" content="Naval Wars, the web game." />
				<link rel="icon" href="/favicon.ico" />
			</UserProvider>

			<main className={styles.main}></main>

			<footer className={styles.footer}></footer>
		</div>
	)
}

export default Home
