import nodeLogo from './assets/node.svg';
import { useEffect, useState } from 'react';
import Update from '@/components/update';
import { Client } from 'pg';
import './App.scss';

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron} ${process.versions.chrome}!`);

function App() {
	const [count, setCount] = useState(0);
	const [dbData, setDbData] = useState([]);

	useEffect(() => {
		const client = new Client({
			user: 'test',
			host: 'localhost',
			database: 'test',
			password: 'test',
			port: 5432,
		});

		const fetchData = async () => {
			try {
				await client.connect();
				console.log('Connected to PostgreSQL database');

				const res = await client.query('SELECT * FROM products');
				setDbData(res.rows);
			} catch (err) {
				console.error('Error querying PostgreSQL database:', err);
			} finally {
				console.log('return called');
				await client.end();
			}
		};

		fetchData();

		return () => {
			console.log('Cleanup function called');
		};
	}, []);

	return (
		<div className='App'>
			<div>
				<h1>PostgreSQL Database Data</h1>
				<ul>
					{dbData.map((row) => (
						<li key={row.id}>{row.product_name}</li>
					))}
				</ul>
			</div>
			<div>
				<a href='https://github.com/electron-vite/electron-vite-react' target='_blank'>
					<img src='./electron-vite.svg' className='logo' alt='Electron + Vite logo' />
				</a>
			</div>
			<h1>Electron + Vite + React + Mayur</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Electron + Vite logo to learn more</p>
			<div className='flex-center'>
				Place static files into the<code>/public</code> folder{' '}
				<img style={{ width: '5em' }} src={nodeLogo} alt='Node logo' />
			</div>

			<Update />
		</div>
	);
}

export default App;
