function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '15px', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()} My Favorite Cities App</p>
    </footer>
  );
}

export default Footer;
