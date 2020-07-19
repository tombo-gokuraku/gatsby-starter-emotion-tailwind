/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useTheme } from "emotion-theming"

import tw, { css } from "twin.macro"

const Header = ({ siteTitle }) => {
  const theme = useTheme()

  return (
    <header
      css={[
        tw`mb-6`,
        css`
          background: linear-gradient(
            to left,
            ${theme.colors.primary},
            ${theme.colors.secondary}
          );
        `,
      ]}
    >
      <div tw="container px-4 py-4 mx-auto my-0 max-w-screen-lg">
        <h1 tw="text-5xl">
          <Link to="/" tw="text-white no-underline">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  theme: PropTypes.object,
  colors: PropTypes.object,
  primary: PropTypes.string,
  secondary: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
