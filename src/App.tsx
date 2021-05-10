import React, { FC } from "react";
import "./App.css";
import { useAuthentication } from "./containers/Authentication";
import { Nav, Navbar, Spinner } from "react-bootstrap";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import MessageListener from "./containers/MessageListener";
import Logo from './assets/images/icons/cloud.svg';


const NavbarButtons = () => {
  const { loading, authenticated, signOut } = useAuthentication();

  if (loading) {
    return null;
  }

  async function handleSignOut(event: any) {
    event.preventDefault();

    try {
      await signOut();
    } catch (err) {
      alert(err.message);
    }
  }

  return authenticated ? (
    <>
      <Nav.Link href="#" onClick={handleSignOut}>
        Logout
      </Nav.Link>
    </>
  ) : (
    <>
      <Nav.Link href="/">Login</Nav.Link>
    </>
  );
};

const AppBody = () => {
  const { loading, authenticated } = useAuthentication();

  if (loading) {
    return <Spinner animation="grow" size="sm" />;
  }

  if (authenticated) {
    return (
      <>
        <MessageListener />
        <Dashboard />
      </>
    );
  }

  return <Home />;
};

const App: FC = () => (
  <div className="App">
    <Navbar collapseOnSelect className='navbar bg-orange'>
      <Navbar.Brand>
        <img src={Logo} className='logo-icon' alt='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/"></Nav.Link>
        </Nav>
        <Nav>
          <NavbarButtons/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className='body'>
      <AppBody />
    </div>
  </div>
);

export default App;
