
import React from 'react'
import { Header } from './components/Header/Header.tsx';
import { LoginPage } from './pages/LoginPage.tsx';



const App: React.FC = () => {
  
  const currentUser = "Олександр"

  return (
    <>
     <div>
      {/* Передаємо ім'я у ваш хедер */}
      <Header userName={currentUser} />
      <LoginPage />
    </div>
    </>
  )
}

export default App
