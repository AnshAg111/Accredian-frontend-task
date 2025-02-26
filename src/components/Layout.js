import Header from "./Header";

const Layout = ({ header = true, children }) => {
  return (
    <>
      {header && <Header />}
      <div className="container mt-3">{children}</div>
    </>
  );
};

export default Layout;