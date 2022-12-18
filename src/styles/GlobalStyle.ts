import { createGlobalStyle } from "styled-components";

export const mainTheme = {
    colors: {
        colorPrimary: "#27AE60",
        colorSecondary: "#EB5757",
        grey0: "#F5F5F5",
        grey100: "#E0E0E0",
        grey200: "#999999",
        grey300: "#828282",
        grey600: "#333333",
        white: "#FFFFFF",
        negative: "#E60000",
        backgroundGreen: "rgba(39, 174, 96, 0.1)",
    },
    shadow: {
        boxShadow: "rgba(0, 0, 0, 0.25)"
    }
};

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-weight-1: 500;
        --font-weight-2: 600;
        --font-weight-3: 700;
        --font-weight-4: 800;
        --font-weight-5: 900;

        --heading-1: 1.625rem;
        --heading-2: 1.375rem;
        --heading-3: 1.125rem;
        --heading-4: 1rem;
        --heading-5: 0.875rem;
        --heading-6: 1.25rem;
        --caption: 0.75rem;

        --border-radius-1: 5px;
        --border-radius-2: 8px;

        --animate-duration: 700ms;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }


    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;

