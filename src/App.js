import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanningPage from './pages/PlanningPage';
import TransactionsPage from './pages/TransactionsPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<PlanningPage />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;