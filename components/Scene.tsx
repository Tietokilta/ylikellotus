type SceneProps = {
  children: React.ReactNode;
  className?: string;
};

export function Scene({ children, className = "" }: SceneProps) {
  return (
    <section
      className={`relative min-h-[200vh] ${className}`}
    >
      <div className="sticky top-16">
        {children}
      </div>
    </section>
  );
}