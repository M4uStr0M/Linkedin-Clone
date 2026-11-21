import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthDataContext } from '../context/AuthContext';
import { logout } from '../api/userService';

const Home = () => {
    const { user, setUser, setIsLogged } = useContext(AuthDataContext);

    const handleLogout = async () => {
        setUser(null);
        if (setIsLogged) setIsLogged(false);
        await logout()

    };

    return (
        <div style={styles.container}>
            {/* Navbar */}
            <nav style={styles.nav}>
                <h2 style={styles.logo}>MyApp</h2>
                <div>
                    {user ? (
                        <button onClick={handleLogout} style={styles.buttonOutline}>
                            Logout
                        </button>
                    ) : (
                        <Link to="/signin" style={styles.button}>
                            Sign In
                        </Link>
                    )}
                </div>
            </nav>

            {/* Main Hero Section */}
            <main style={styles.hero}>
                {user ? (
                    <>
                        <h1>Welcome back, {user.name || user.email || 'User'}!</h1>
                        <p style={styles.subtitle}>
                            You are successfully logged in to your dashboard.
                        </p>
                    </>
                ) : (
                    <>
                        <h1>Welcome to MyApp</h1>
                        <p style={styles.subtitle}>
                            A simple, fast, and secure way to manage your account.
                        </p>
                        <Link to="/signin" style={styles.button}>
                            Get Started
                        </Link>
                    </>
                )}
            </main>
        </div>
    );
};

// Simple inline styles (replace with Tailwind or CSS classes if you use them)
const styles = {
    container: {
        fontFamily: 'system-ui, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        color: '#111827',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
    },
    logo: {
        margin: 0,
        fontSize: '1.25rem',
    },
    hero: {
        maxWidth: '600px',
        margin: '6rem auto',
        textAlign: 'center',
        padding: '0 1rem',
    },
    subtitle: {
        color: '#4b5563',
        fontSize: '1.125rem',
        marginBottom: '2rem',
    },
    button: {
        display: 'inline-block',
        padding: '0.65rem 1.25rem',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '6px',
        fontWeight: '500',
    },
    buttonOutline: {
        padding: '0.5rem 1rem',
        backgroundColor: 'transparent',
        color: '#dc2626',
        border: '1px solid #dc2626',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '500',
    },
};

export default Home;
