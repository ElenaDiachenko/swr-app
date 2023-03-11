import { FC } from 'react';

type Props = {
  error: Error;
};

export const ErrorFallback: FC<Props> = ({ error }) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};
