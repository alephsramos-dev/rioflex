import { Global, css } from "@emotion/react";

export default function GlobalStyles() {
    return (
        <Global
            styles={theme => css`
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                body {
                    font-family: ${theme.font.poppins};
                }
            `}
        />
    );
}