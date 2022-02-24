import { Container, Grid } from "@mui/material";
import Main from "../pages/Blog/Main";
import Header from "./Blog/Header";
import Sidebar from "./Blog/Sidebar";
import Footer from "./Footer";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Layout({ children }) {
    const sidebar = {
        title: 'Ta curioso é?',
        description:
            'Pode me encontrar pelas redes ai',
        social: [
            { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/jonatasthielke' },
            { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/jonatas_thielke' },
            { name: 'Facebook', icon: FacebookIcon, url: 'https://fb.com/jonatas.thielke' },
            { name: 'Linkedin', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/jonatas-thielke/' }
        ],
    };
    return (<div>
        <Container maxWidth="lg">
            <Header title="Jônatas Thielke" sections={[]} />
            <main>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Main>
                        {children}
                    </Main>
                    <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        archives={sidebar.archives}
                        social={sidebar.social}
                    />
                </Grid>
            </main>
        </Container>
        <div>
            <Footer
                title="Its My Page"
                description="Estou aqui só de bobeira!"
            />
        </div>
    </div>);
}

export default Layout;