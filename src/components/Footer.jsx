const Footer = () => (
  <footer className="bg-gray-100 text-center p-4 mt-8">
    <p>&copy; {new Date().getFullYear()} RCK</p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </footer>
);

export default Footer;
