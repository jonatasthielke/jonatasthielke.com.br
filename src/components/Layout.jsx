import Copyright from "./Copyright";

function Layout({ children }) {
    return (<div>
        {children}
        <Copyright />
    </div>);
}

export default Layout;