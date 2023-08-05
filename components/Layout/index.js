import Navbar from "../Navbar";
import Star from "../Star";
const Layout = ({ children }) => {
  return (
    <main>
      <Star />
      <div className="z-50 relative">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
