import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/home' element={<Home />} />
					<Route path='/friend/:friendId' element={<FriendDetails />} />
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
