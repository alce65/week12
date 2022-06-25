import './header.css';
export function Header({
    appTitle,
    children,
}: {
    appTitle: string;
    children: JSX.Element;
}) {
    const logo = './logo.svg';
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {appTitle}
                </a>
            </h1>
            {children}
        </header>
    );
}
