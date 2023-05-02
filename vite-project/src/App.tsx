import React from 'react'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RequestQueryRQ from './pages/RequestQueryRQ';
import RequestQueryRQId from './pages/RequestQueryRQId';
import ParallelQueries from './pages/ParallelQueries';
import ParallelComment from './pages/ParallelComment';
import ParallelBook from './pages/ParallelBook';
import DependentQuery from './pages/DependentQuery';
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
        <Route path="/req-parallel" element={<ParallelQueries />} />
        <Route path="/req-parallel-commentid/:commentId" element={<ParallelComment />} />
        <Route path="/req-parallel-bookid/:bookId" element={<ParallelBook />} />
        <Route path="/req-dependent" element={<DependentQuery email="chat@mail.com" />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  )
}
export default App;
