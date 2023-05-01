import React from 'react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RequestQueryRQ from './pages/RequestQueryRQ';
import RequestQueryRQId from './pages/RequestQueryRQId';
import Traditional from './pages/Traditional';
import './App.css'

const queryClient = new QueryClient();

const App:React.FC = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/request-rq/:commentId" element={<RequestQueryRQId />} />
        <Route path="/requestqueryRQ" element={<RequestQueryRQ />} />
        <Route path="/traditional" element={<Traditional />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  )
}
export default App;
