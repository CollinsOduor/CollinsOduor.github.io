/** @jsx jsx */
import { jsx, Link } from "theme-ui";

const Footer = () => {
  return (
    <footer
      style={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        marginTop: 6,
        color: `secondary`,
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <div>
        &copy; Maintained from 2021 to {new Date().getFullYear()} by Collins
        Oduor. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to the author's GitHub"
          href="https://github.com/CollinsOduor"
        >
          GitHub
        </Link>
        {' '}
        {' '}
        <Link
          aria-label="Link to the author's LinkedIn"
          href="https://www.linkedin.com/in/collins-otieno-8ab476116/"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
