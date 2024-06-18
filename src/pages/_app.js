// pages/_app.js
import '@/styles/globals.css'; 
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header/>
        <div style={{ flex: 1 }}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
