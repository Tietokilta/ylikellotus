type SceneProps = {
  children: React.ReactNode;
  className?: string;
};

export function Scene({ children, className = "" }: SceneProps) {
  return (
    <section
      className={`relative h-[200vh] w-full ${className}`}
    >
      <div className="sticky top-16 h-screen overflow-hidden">
        {children}
      </div>
    </section>
  );
}