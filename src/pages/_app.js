// pages/_app.js
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@/styles/globals.css'; // Import global CSS file here

import { styles } from '@/styles/Home.module.css';

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
