
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingSpinner from './component/UI/LoadingSpinner';

const Home = React.lazy(() => import('./component/pages/Home'));
const Blog = React.lazy(() => import('./component/pages/Blog'));
const BlogDetail = React.lazy(() => import('./component/pages/BlogDetail'));
const Contact = React.lazy(() => import('./component/pages/Contact'));
const Table = React.lazy(() => import('./component/pages/Table'));
const Notfound = React.lazy(() => import('./component/pages/Notfound'));


function App() {
	
  return (
    <div className="App">
	
			<Header />
			<Suspense
				fallback={
					<div className='centered'>
						<LoadingSpinner />
					</div>
				}
			>
			<Switch>			
				<Route path="/blog">		
					<Blog />
				</Route>
				<Route path="/blogDetail/:bId">
					<BlogDetail />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/table">
					<Table/>
				</Route>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="*">
					<Notfound />
				</Route>
			</Switch>
			</Suspense>
				
			<Footer />

	  
	  
    </div>
  );
}

export default App;
