import './globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
    title: 'Personal Website',
    description: 'Personal Website of Brayan Duran',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
