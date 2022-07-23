import { useState } from 'react'
import styles from '../styles/Home.module.css'

//fetching the data from API
async function fetchData() {
	const response = await fetch('https://api.adviceslip.com/advice')
	const data = await response.json()

	return { data }
}

export default function Home(props) {
	const [data, setData] = useState(props.data)

	// function to reload the API after every call

	async function refresh() {
		const refreshedProps = await fetchData()
		setData(refreshedProps.data)
	}

	return (
		<div className={styles.App}>
			<h2 className={styles.headerText}> Advice </h2>
			<p className={styles.paragraph}>{data.slip.advice}</p>
			<button className={styles.button} onClick={refresh}>
				Seek Advice 🤲
			</button>
		</div>
	)
}

Home.getInitialProps = fetchData
