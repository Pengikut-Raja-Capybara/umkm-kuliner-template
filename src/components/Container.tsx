import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
};

export default Container;
