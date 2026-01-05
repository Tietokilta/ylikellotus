type SceneProps = {
  children: React.ReactNode;
  className?: string;
};

export function Scene({ children, className = "" }: SceneProps) {
  return (
    <section
      className={`w-full md:max-w-[1000px] h-full overflow-hidden ${className}`}
    >
      <div className="top-0">
        {children}
      </div>
    </section>
  );
}