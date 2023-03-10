import { FC } from 'react';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

export const Container: FC<ContainerProps> = ({ children, title }) => {
  return (
    <div className="bg-slate-400 p-4 border shadow rounded-md">
      {title && <h2 className="text-xl pb-2 text-white">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};
