export default function Container({ children }) {
  return (
    <>
      <header>HEADER</header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  );
}
