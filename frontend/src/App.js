import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faHome,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen/CartScreen';
import SigninScreen from './screens/SigninScreen/SigninScreen';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screens/ShippingAddressScreen/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar variant="dark" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    src="./sancho.ico"
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />{' '}
                  laManchaCommerce
                </Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main className="mt-3 mb-3">
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />}></Route>
              <Route
                path="/orderhistory"
                element={<OrderHistoryScreen />}
              ></Route>
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="footer mt-auto py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-info">
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{ marginRight: '5px' }}
                    />
                    laManchaCommerce
                  </p>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faMapMarker}
                      style={{ marginRight: '5px' }}
                    />
                    Dirección: Sierra del Gollino, Toledo, España, 45000
                  </p>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ marginRight: '5px' }}
                    />
                    Correo electrónico: laManchaCommerce@xxxxx.com
                  </p>
                  <p className="mb-0">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ marginRight: '5px' }}
                    />
                    Teléfono: +123456789
                  </p>
                </div>
              </div>
              <div className="social-icons col-md-6 d-flex justify-content-md-end justify-content-center">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  style={{ marginRight: '10px' }}
                >
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  style={{ marginRight: '10px' }}
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  style={{ marginRight: '10px' }}
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col text-center">
                <p className="mb-0">
                  &copy; 2024 Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
