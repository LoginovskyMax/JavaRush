
export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <header> My custom header</header>
    {children}
    </>
  );
}