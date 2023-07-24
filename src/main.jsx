import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { createRoot } from 'react-dom/client';
import { router } from './Routes/Routers'; // Make sure 'router' is properly defined in this file

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Provider/AuthProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
