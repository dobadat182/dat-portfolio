type Props = {
  children: React.ReactNode;
  className?: string;
};

export function H1({ children, className }: Props) {
  return (
    <h1
      className={`${className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
    >
      {children}
    </h1>
  );
}

export function H2({ children }: Props) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function H3({ children, className }: Props) {
  return (
    <h3
      className={`${className} scroll-m-20 text-2xl font-semibold tracking-tight`}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className }: Props) {
  return (
    <h4
      className={`${className} scroll-m-20 text-xl font-semibold tracking-tight`}
    >
      {children}
    </h4>
  );
}

export function Heading1({ children, className }: Props) {
  return (
    <h2
      className={`${className} scroll-m-20 text-3xl font-extrabold tracking-tight md:text-4xl`}
    >
      {children}
    </h2>
  );
}
