import nodeLogo from './assets/node.svg';
import { useEffect, useState } from 'react';
import Update from '@/components/update';
import { Client } from 'pg';
import './App.scss';
import { Select } from 'antd';
const { ipcRenderer } = window.require('electron');
console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron} ${process.versions.chrome}!`);

const client = new Client({
	user: 'test',
	host: 'localhost',
	database: 'test',
	password: 'test',
	port: 5432,
});

await client.connect();

function App() {
	const [count, setCount] = useState(0);
	const [dbData, setDbData] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {}, []);

	const fetchData = async (query: string) => {
		try {
			console.log('Connected to PostgreSQL database');
			const res = await client.query(`SELECT * FROM products WHERE product_name ILIKE '%${query}%';`);
			const ans = res.rows.map((item) => ({ label: item?.product_name, value: item?.id }));
			setDbData(ans);
		} catch (err) {
			console.error('Error querying PostgreSQL database:', err);
		} finally {
			console.log('return called');
			// await client.end();
		}
	};

	const onSearch = (value: string) => {
		if (value.length < 3) return;
		fetchData(value);
	};

	const onChange = (newValue: string) => {
		setValue(newValue);
	};

	const handlePrint = () => {
		ipcRenderer.send('print-to-pdf');
	};

	return (
		<div className='App'>
			<button onClick={handlePrint}>Print</button>
			<div>
				<Select
					value={value}
					placeholder='Hello world'
					notFoundContent={null}
					filterOption={false}
					onChange={onChange}
					defaultActiveFirstOption={false}
					showSearch
					onSearch={onSearch}
					options={dbData}
					style={{ width: '50%' }}
				/>
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
