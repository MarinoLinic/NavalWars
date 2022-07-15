import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const [klemens, setklemens] = useState("klemens")
	console.log(useState("klemens")[0])
	return (
		<div>
			<button onClick={() => setklemens(klemens+"s")}>Click me!</button>
			{useState("klemens")[0]}
			{klemens}
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
