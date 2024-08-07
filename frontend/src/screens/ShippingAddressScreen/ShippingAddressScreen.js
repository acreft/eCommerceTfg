import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    navigate('/payment');
  };
  return (
    <div>
      <Helmet>
        <title>Dirección de Envío</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="labelAddress">Agregar una nueva dirección de envío</h1>
        <Form onSubmit={submitHandler} className="shipping-form">
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Nombre completo:</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Dirección (Línea 1):</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="address">
            <Form.Label>Dirección (Línea 2, opcional):</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Ciudad:</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="city">
            <Form.Label>Estado/Provincia/Región:</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Código postal:</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>País:</Form.Label>
            <Form.Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">--Selecciona una opción--</option>
              <option value="espana">España</option>
              <option value="portugal">Portugal</option>
              <option value="chile">Chile</option>
              <option value="argentina">Argentina</option>
              <option value="bolivia">Bolivia</option>
              <option value="colombia">Colombia</option>
            </Form.Select>
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit" className="button">
              Guardar dirección
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
