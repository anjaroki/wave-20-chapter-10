import Navbar from "./Navbar";

export default function NavbarLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
