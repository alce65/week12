import { menuOptionsType } from '../../interfaces/menuoptions';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export function Layout({
    appTitle,
    company,
    menuOptions,
    children,
}: {
    appTitle: string;
    company: string;
    menuOptions: menuOptionsType;
    children: JSX.Element;
}) {
    return (
        <>
            <Header appTitle={appTitle}>
                <Menu menuOptions={menuOptions}></Menu>
            </Header>
            <main>{children}</main>
            <Footer company={company}></Footer>
        </>
    );
}
