// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-color text-sm py-4 text-center mt-8">
      <p>
        © {new Date().getFullYear()} Lumentae Studios · Built with ❤️ using React
      </p>
    </footer>
  );
};

export default Footer;