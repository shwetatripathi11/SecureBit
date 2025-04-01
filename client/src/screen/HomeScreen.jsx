import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import bg1 from "../screen/bg1.jpg";

const HomeScreen = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      // history.push("/login");
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
     <div
      style={{
        width: "100vw",
        height: "90vh",
        position: "relative",
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay for high opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay with opacity
          zIndex: 1, // Ensures overlay is above the background
        }}
      ></div>

      <Carousel
        controls={true}
        indicators={true}
        interval={3000}
        style={{
          width: "80%",
          height: "70vh",
          position: "relative",
          zIndex: 2, // Ensures carousel appears above overlay
        }}
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontSize: "5rem",
                fontWeight: "bold",
                letterSpacing: "3px",
                textShadow: "4px 4px 10px rgba(0, 0, 0, 0.8)",
              }}
            >
              ExamEase
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{
                fontSize: "2rem",
                fontWeight: "500",
                color: "#e0e1dd",
                textTransform: "uppercase",
                letterSpacing: "2px",
                background: "linear-gradient(to right, #0d1b2a,rgb(56, 90, 128))",
                padding: "10px 20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                display: "inline-block",
              }}
            >
              "Your Virtual Exam Room"
            </motion.h3>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            "Examinations are no longer about a place; they are about proving knowledge anywhere, anytime."
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div
            style={{
              width: "100%",
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
           "In the digital age, knowledge knows no boundaries—virtual exams bridge the gap between learning and achievement."
          </div>
        </Carousel.Item>
      </Carousel>
    </div>

      {/* Features Section */}
     {/* Features Section */}
<Container fluid style={{ backgroundColor: "#175958", padding: "50px 0" }}>
  <Row>
    <Col>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  <motion.h2
    style={{ 
      color: 'white', 
      textAlign: 'center', 
      fontWeight: 'bold', 
      marginBottom: '40px',
      fontSize: '3rem',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      position: 'relative',
      display: 'inline-block'
    }}
  >
    FEATURES
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 1 }}
      style={{
        position: 'absolute',
        bottom: '-10px',
        left: 0,
        height: '4px',
        background: 'white'
      }}
    />  
  </motion.h2>
</div>
    </Col>
  </Row>

  {[...Array(2)].map((_, rowIndex) => (
    <Row key={rowIndex} className="justify-content-center my-3">
      {[
        { icon: "camera", title: "Snapshots", desc: "Capture Images during exam" },
        { icon: "file-download", title: "Download Result", desc: "Download Result in excel format" },
        { icon: "chart-bar", title: "Graphical Form", desc: "Check Result in graphical format" },
        { icon: "file-pdf", title: "PDF Upload", desc: "Candidates can upload response sheets in PDF format" },
        { icon: "file", title: "Assignment", desc: "Supervisor can assign assignments to students" },
        { icon: "users", title: "Groups", desc: "Supervisors create groups, students can join" },
        { icon: "chart-line", title: "Track Progress", desc: "Track progress with past scores & trends" },
        { icon: "file-signature", title: "Competitive Exam", desc: "Candidates register via Supervisor link" },
        { icon: "check-square", title: "Automatic Result Generation", desc: "Results generate automatically" },
        { icon: "eye", title: "AI Proctoring", desc: "Monitors exams in real-time using AI" },
      ]
        .slice(rowIndex * 5, rowIndex * 5 + 5)
        .map((feature, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              style={{
                width: "250px", 
                borderRadius: "10px", 
                background: "#cfd8dc", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                textAlign: "center", 
                padding: "20px", 
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
                color: "#175958",
                overflow: "hidden"
              }}
            >
              <motion.div 
                style={{ 
                  width: "50px", 
                  height: "50px", 
                  borderRadius: "50%", 
                  background: "#175958", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  marginBottom: "15px",
                  position: "relative"
                }}
                animate={{
                  rotate: [
                    0,      // Starting position
                    15,     // Swing to right
                    -15,    // Swing to left
                    0       // Return to center
                  ],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop"
                  }
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '10px',
                    background: '#cfd8dc'
                  }}
                />
                <motion.i 
                  className={`fas fa-${feature.icon}`} 
                  style={{ 
                    color: "#cfd8dc", 
                    fontSize: "1.5rem",
                    transformOrigin: 'top center'
                  }}
                />
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '10px',
                    background: '#cfd8dc'
                  }}
                />
              </motion.div>
              <h5 style={{ marginBottom: "10px", color: "#175958" }}>{feature.title}</h5>
              <p style={{ fontSize: "0.9rem", color: "#333" }}>{feature.desc}</p>
            </motion.div>
          </Col>
        ))}
    </Row>
  ))}
</Container>

      {/* Footer */}
      <div
        style={{
          backgroundColor: "rgb(13, 27, 42)",
          color: "white",
          textAlign: "center",
          padding: "5px",
          marginTop: "20px",
          fontSize: "5px",
        }}
      >
        <p style={{fontSize: "20px" }} >&copy; {new Date().getFullYear()} ExamBit. All rights reserved.</p>
        <p>
          {/* Contact us:{" "} */}
          <a href="mailto:examease060@gmail.com" style={{ color: "#e0e1dd", textDecoration: "underline",fontSize: "15px" }}>
            examease060@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
