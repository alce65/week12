import './footer.css';
export function Footer({ company }: { company?: string }) {
    return (
        <footer>
            <address>{company && company}</address>
        </footer>
    );
}
