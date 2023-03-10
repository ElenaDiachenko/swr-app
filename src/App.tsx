import React from 'react';
import { Container } from './components/Container';
import { Input } from './components/Input';

function App() {
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
          <Container title={' Hello'}>
            <Input />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
