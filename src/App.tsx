import './App.css'
import React from 'react'
import { Header } from './components/Header/Header.tsx';

const App: React.FC = () => {
  
  const currentUser = "Олександр"

  return (
    <>
     <div>
      {/* Передаємо ім'я у ваш хедер */}
      <Header userName={currentUser} />
    </div>
    </>
  )
}

export default App
