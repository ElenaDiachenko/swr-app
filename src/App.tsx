import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Container } from './components/Container';
import { Input } from './components/Input';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
      <div className="flex justify-center m-5">
        <div className="flex flex-col items-center">
          <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
            <Container title={' Hello'}>
              <Input />
            </Container>
            <Container title={'Tasks'}>
              <Tasks />
            </Container>
          </div>
        </div>
      </div>
      <Toaster toastOptions={{ position: 'top-center', duration: 1000 }} />
    </>
  );
}

export default App;
