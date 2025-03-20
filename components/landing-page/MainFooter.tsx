import Link from "next/link";

const sections = [
    {
        title: "Company",
        links: [
            { href: "/toefl-voucher", label: "Vouchers" },
            { href: "/classes", label: "Classes" },
            { href: "/vocab-ladder", label: "Vocabulary" },
        ],
    },
    {
        title: "Services",
        links: [
            { href: "/book", label: "Books" },
            { href: "/courses", label: "Courses" },
            { href: "/classes", label: "Lectures" },
        ],
    },
    {
        title: "Links",
        links: [
            { href: "https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7", label: "Community" },
            { href: "https://gregoglobal.com/", label: "GRE website" },
            { href: "http://ieltsgoglobal.com/", label: "IELTS website" },
        ],
    },
];

const FooterSection = ({ title, links }: { title: string; links: { href: string; label: string }[] }) => (
    <div className="w-full sm:w-auto text-center sm:text-left">
        <p className="font-medium text-primary">{title}</p>
        <ul className="mt-4 space-y-3 text-sm">
            {links.map(({ href, label }) => (
                <li key={href}>
                    <Link href={href} className="text-muted-foreground transition hover:text-primary">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default function MainFooter() {
    return (
        <div className="p-6 mx-4 mb-10 rounded-xl border shadow-[0_10px_30px_rgba(8,_112,_184,_0.5)]">
            <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:justify-between gap-8">
                <div className="max-w-md">
                    <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
                        TOEFL Go Global
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                        MJ Study Abroad is one of the Leading Study Abroad Consultants (as per ETS) providing education loan and visa services as well.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
                    {sections.map(({ title, links }) => (
                        <FooterSection key={title} title={title} links={links} />
                    ))}
                </div>
            </div>
        </div>
    );
}