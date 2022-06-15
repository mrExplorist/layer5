import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";

import SEO from "../../components/seo";
import BooksPage from "../../sections/Learn/Books-grid";
import LearnServiceMeshCTA from "../../sections/Learn/Learn-Service-Mesh-CTA";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import { useState } from "react";
import lighttheme from "../../theme/app/themeStyles";
import darktheme from "../../theme/app/darkThemeStyles";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const BooksGridPage = ({ hide_path }) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if(cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return(
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Books" description="Learn how to service mesh with books written by Layer5 authors.
  Layer5 is the makers of Meshery and service mesh standards.
  We are the largest collection of service mesh projects and their maintainers in the world." />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <BooksPage hide_path={hide_path} />
        <LearnServiceMeshCTA />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default BooksGridPage;
