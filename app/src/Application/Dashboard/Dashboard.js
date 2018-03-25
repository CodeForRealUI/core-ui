import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from 'src/shared/NavBar';
import LeftFilterBar from './LeftFilterBar';
import './styles.scss';

const Dashboard = () => (
  <div>
    <Route path="/" component={NavBar} />
    <Route path="/" component={LeftFilterBar} />
  </div>
);

export default Dashboard;
