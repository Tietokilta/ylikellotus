type SceneProps = {
  children: React.ReactNode;
  className?: string;
};

export function Scene({ children, className = "" }: SceneProps) {
  return (
    <section
      className={`relative sm:w-screen w-[calc(100vh*11/16)] ${className}`}
    >
      <div className="sticky top-16">
        {children}
      </div>
    </section>
  );
}