import React from 'react';
import { UserInput } from './components/UserInput';
import { LoginButton } from './components/LoginButton';
import { PasswordInput } from './components/PasswordInput';


function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-gray-100 min-h-screen">
      <UserInput />
      <PasswordInput />
      <LoginButton />
    </div>



  );
}

export default App;
