

export default function AboutLauout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <h1>Layout about</h1>
        {children}
    </main>
  );
}
