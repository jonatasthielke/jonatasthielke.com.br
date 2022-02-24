import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { CssBaseline, GlobalStyles } from '@mui/material';

function Footer(props) {
  const { description, title } = props;
  console.log(GlobalStyles())


  return (
    // <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
    //   <Container maxWidth="lg">
    //     <Typography variant="h6" align="center" gutterBottom>
    //       {title}
    //     </Typography>
    //     <Typography
    //       variant="subtitle1"
    //       align="center"
    //       color="text.secondary"
    //       component="p"
    //     >
    //       {description}
    //     </Typography>
    //   </Container>
    // </Box>
    <>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
