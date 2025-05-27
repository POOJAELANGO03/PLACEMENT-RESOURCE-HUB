import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const HomePage = ({ user }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [username, setUsername] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      title: "Empowering Computer Science Students",
      subtitle: "Learn. Practice. Get Placed.",
      ctaText: "Get Started",
    },
    {
      backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80')",
      title: "Master Your Skills",
      subtitle: "Join our comprehensive courses and workshops.",
      ctaText: "Explore Courses",
    },
    {
      backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      title: "Get Job Ready",
      subtitle: "Prepare for interviews with our expert guidance.",
      ctaText: "Start Preparing",
    },
  ];

  useEffect(() => {
    if (user) {
      const extractedUsername = user.email.split("@")[0];
      setUsername(extractedUsername);
    }
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={styles.container}>
      {/* Slideshow Section */}
      <div 
        style={{ 
          ...styles.hero, 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), ${slides[currentSlide].backgroundImage}` 
        }}
      >
        <div style={styles.heroContent}>
          <h1 style={styles.title}>{slides[currentSlide].title}</h1>
          <p style={styles.subtitle}>{slides[currentSlide].subtitle}</p>
          <button style={styles.ctaButton}>
            <span>{slides[currentSlide].ctaText}</span>
          </button>
        </div>
        <div style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <span
              key={index}
              style={currentSlide === index ? styles.activeDot : styles.dot}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section style={styles.features}>
        <div 
          style={{ 
            ...styles.featureCard, 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
          }}
          onClick={() => navigate("/learn-hub")}
          className="clickable"
        >
          <div style={styles.featureIcon}>📚</div>
          <h3 style={styles.featureTitle}>Learn Hub</h3>
          <p style={styles.featureDescription}>Access curated resources for coding, subjects, and certifications.</p>
          <div style={styles.featureLink}>Explore &rarr;</div>
        </div>
        
        <div 
          style={{ 
            ...styles.featureCard, 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
          }}
          onClick={() => navigate("/train-to-place")}
          className="clickable"
        >
          <div style={styles.featureIcon}>🚀</div>
          <h3 style={styles.featureTitle}>Train to Place</h3>
          <p style={styles.featureDescription}>Prepare with aptitude tests, coding challenges, and interview questions.</p>
          <div style={styles.featureLink}>Get Started &rarr;</div>
        </div>
        <div 
          style={{ ...styles.featureCard, backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')" }}
          onClick={() => navigate("/profile")}
          className="clickable"
        >
  
          <div style={styles.featureIcon}>👤</div>
          <h3 style={styles.featureTitle}>Profile</h3>
          <p style={styles.featureDescription}>Edit your profile Here</p>
          <div style={styles.featureLink}>click here &rarr;</div>
        </div>
      </section>

      {/* Footer Section - Changes Based on User Login State */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          {user ? (
            <>
              <p style={styles.welcomeText}>Welcome back, <span style={styles.username}>{username}</span>!</p>
              <button style={styles.logoutButton} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <p style={styles.footerText}>Ready to start learning?</p>
              <button 
                style={styles.joinButton} 
                onClick={() => navigate("/register")}
              >
                Join Now
              </button>
            </>
          )}
        </div>
      </footer>
    </div>
  );
};

// Enhanced Internal CSS with improved colors
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#111827",
    background: "linear-gradient(135deg, #111827, #1E3A8A)",
    minHeight: "100vh",
    padding: "20px",
    overflow: "hidden",
  },
  hero: {
    color: "#fff",
    padding: "80px 20px",
    borderRadius: "15px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "all 0.5s ease-in-out",
    position: "relative",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    height: "400px",
  },
  heroContent: {
    zIndex: 10,
    maxWidth: "800px",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    animation: "fadeIn 0.8s ease-out",
  },
  subtitle: {
    fontSize: "1.4rem",
    marginBottom: "30px",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
    fontWeight: "300",
    lineHeight: "1.6",
  },
  ctaButton: {
    backgroundColor: "#6366F1",
    color: "#fff",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    padding: "12px 30px",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    position: "relative",
    overflow: "hidden",
    outline: "none",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "40px",
    flexWrap: "wrap",
    padding: "10px",
  },
  featureCard: {
    backgroundColor: "rgba(30, 41, 59, 0.8)",
    padding: "30px 25px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    width: "300px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(99, 102, 241, 0.2)",
    position: "relative",
    overflow: "hidden",
  },
  featureIcon: {
    fontSize: "2.5rem",
    marginBottom: "15px",
  },
  featureTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#fff",
  },
  featureDescription: {
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "20px",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  featureLink: {
    color: "#818CF8",
    fontWeight: "600",
    marginTop: "auto",
    transition: "all 0.3s ease",
  },
  footer: {
    marginTop: "60px",
    padding: "30px 20px",
    background: "linear-gradient(to right, rgba(30, 41, 59, 0.95), rgba(30, 58, 138, 0.95))",
    borderRadius: "15px",
    boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.1)",
  },
  footerContent: {
    maxWidth: "800px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  welcomeText: {
    fontSize: "1.2rem",
    color: "rgba(255, 255, 255, 0.9)",
  },
  username: {
    color: "#818CF8",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: "1.3rem",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.9)",
  },
  logoutButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "#fff",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "10px 25px",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  joinButton: {
    backgroundColor: "#6366F1",
    color: "#fff",
    border: "none",
    padding: "12px 30px",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "20px",
    zIndex: 10,
  },
  dot: {
    height: "12px",
    width: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "50%",
    margin: "0 6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "2px solid transparent",
  },
  activeDot: {
    backgroundColor: "#818CF8",
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    margin: "0 6px",
    cursor: "pointer",
    border: "2px solid rgba(255, 255, 255, 0.6)",
    transform: "scale(1.2)",
  },
};

export default HomePage;