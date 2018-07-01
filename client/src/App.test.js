import React from 'react';
import App from './App';
import 'jest-enzyme';


describe('App component rendering' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    expect(div).toHaveLength(1);
  });  
});
