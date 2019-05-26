import Header from "../Header/Header";
import "./Layout.css";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="layout-content">{children}</div>
  </div>
);

export default Layout;
