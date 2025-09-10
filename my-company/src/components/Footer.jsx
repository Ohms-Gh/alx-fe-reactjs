function Footer() {
  return (
    <footer style={{
      background: '#f5f5f5',
      padding: '15px',
      textAlign: 'center',
      marginTop: '20px'
    }}>
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
