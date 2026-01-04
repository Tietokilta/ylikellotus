type SceneProps = {
  children: React.ReactNode;
  className?: string;
};

export function Scene({ children, className = "" }: SceneProps) {
  return (
    <section
      className={`w-full md:max-w-[1000px] h-full ${className}`}
    >
      <div className="top-16">
        {children}
      </div>
    </section>
  );
}