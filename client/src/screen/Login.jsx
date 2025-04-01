import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { login } from "../actions/userAction";
import { motion } from "framer-motion";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo } = useSelector((state) => state.userLogin);
  const location = useLocation();
  const redirect = location.search ? location.search.slice(10, 89) : "/";
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div style={styles.page}>
      <Container>
        <Row className="justify-content-md-center my-5">
          <Col sx={12} md={6}>
            <motion.div
              style={styles.glassCard}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                style={styles.heading}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                SIGN IN
              </motion.h2>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                  <Form.Label style={styles.label}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label style={styles.label}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                  />
                </Form.Group>

                <motion.button
                  type="submit"
                  style={styles.button}
                  whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Login
                </motion.button>

                <Row className="py-3 px-3">
                  NEW USER? &nbsp;&nbsp;
                  <Link to="/register" style={styles.link}>
                    REGISTER
                  </Link>
                </Row>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Inline CSS styles
const styles = {
  page: {
    background: "#343a40",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  glassCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
  heading: {
    color: "#f8f9fa",
    fontWeight: "bold",
  },
  label: {
    color: "#f8f9fa",
  },
  input: {
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    color: "#f8f9fa",
  },
  button: {
    background: "#175958",
    border: "none",
    padding: "10px 20px",
    fontSize: "18px",
    borderRadius: "10px",
    cursor: "pointer",
    color: "#fff",
    marginTop: "15px",
    transition: "all 0.3s ease-in-out",
  },
  link: {
    color: "#f8f9fa",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};

export default Login;
