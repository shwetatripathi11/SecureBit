// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { userRegister } from '../actions/userAction';
// import { toast } from 'react-toastify';

// const Register = ({ history }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [category, setCategory] = useState('');

//   const submitHandler = e => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       toast.error('Password Does not match');
//     } else {
//       userRegister({ name, email, password, category }, history);
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center my-5">
//         <Col sx={12} md={6}>
//           <h2>SIGN UP</h2>
//           <Form onSubmit={submitHandler}>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="name"
//                 value={name}
//                 placeholder="Enter name"
//                 onChange={e => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="email">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={email}
//                 placeholder="Enter Email Address"
//                 onChange={e => setEmail(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="category">
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={category}
//                 onChange={e => setCategory(e.target.value)}
//               >
//                 <option value="">Select Category</option>
//                 <option value="SUPERVISOR">Supervisor</option>
//                 <option value="STUDENT">Student</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 value={password}
//                 placeholder="Enter Password"
//                 onChange={e => setPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="confirmPassword">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 value={confirmPassword}
//                 placeholder="Confirm Password"
//                 onChange={e => setConfirmPassword(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Button type="submit" variant="primary">
//               Submit
//             </Button>

//             <Row className="py-3 px-3">
//               ALREADY HAVE AN ACCOUNT ? &nbsp;&nbsp;{' '}
//               <Link to="/login">SIGN IN</Link>
//             </Row>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userRegister } from "../actions/userAction";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password Does not match");
    } else {
      userRegister({ name, email, password, category }, history);
    }
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
                SIGN UP
              </motion.h2>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label style={styles.label}>Name</Form.Label>
                  <Form.Control
                    type="name"
                    value={name}
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label style={styles.label}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                  />
                </Form.Group>

                <Form.Group controlId="category">
                  <Form.Label style={styles.label}>Category</Form.Label>
                  <Form.Control
                    as="select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={styles.input}
                  >
                    <option value="">Select Category</option>
                    <option value="SUPERVISOR">Supervisor</option>
                    <option value="STUDENT">Student</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label style={styles.label}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                  />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                  <Form.Label style={styles.label}>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={styles.input}
                  />
                </Form.Group>

                <motion.button
                  type="submit"
                  style={styles.button}
                  whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>

                <Row className="py-3 px-3">
                  ALREADY HAVE AN ACCOUNT? &nbsp;&nbsp;
                  <Link to="/login" style={styles.link}>
                    SIGN IN
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

export default Register;
