import { useState } from 'react';
import reactLogo from './assets/react.svg';

import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

import './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <main>
        <TodoList />
      </main>
    </>
  )
}
