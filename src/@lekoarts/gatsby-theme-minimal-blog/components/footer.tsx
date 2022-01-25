/** @jsx jsx */
import { jsx, Link } from "theme-ui";

const Footer = () => {
  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; Maintained from 2021 to {new Date().getFullYear()} by Collins
        Oduor. All rights reserved.
      </div>
      <div>
        <Link
          aria-label="Link to the author's Twitter page"
          href="https://twitter.com/oduorotieno1304"
        >
          Twitter
        </Link>
        {` `}

        {` `}
        <Link
          aria-label="Link to the author's GitHub"
          href="https://github.com/CollinsOduor"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
