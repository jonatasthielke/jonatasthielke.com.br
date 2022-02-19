import { Link, Typography } from "@mui/material";

export default function Copyright() {
    return (
      <Typography variant="footer" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }