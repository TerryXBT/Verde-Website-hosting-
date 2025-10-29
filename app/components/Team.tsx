'use client';

import { useState } from 'react';
import {
    Leaf,
    Laptop2,
    Puzzle,
    PenTool,
    ShieldHalf,
    Palette,
    BarChart3,
    Linkedin,
    Github,
    Mail,
    type LucideIcon,
} from 'lucide-react';

type SocialKind = 'linkedin' | 'github' | 'email';

type TeamMember = {
    name: string;
    role: string;
    description: string;
    focus: string;
    icon: LucideIcon;
    socials: Array<{
        kind: SocialKind;
        href: string;
        label: string;
    }>;
};

const teamMembers: TeamMember[] = [
    {
        name: 'Shashank Reddy',
        role: 'Project Lead • Systems Architect',
        description:
            'I specialise in tailored digital solutions from the first sketch to long term maintenance. I build systems that reflect real market needs and stay grounded in curiosity about how things work.',
        focus: 'AWS, Terraform, Docker, Kubernetes, CI/CD optimisation.',
        icon: Laptop2,
        socials: [
            {
                kind: 'linkedin',
                href: 'https://www.linkedin.com/in/prabhakar-reddy-shashank',
                label: 'Shashank on LinkedIn',
            },
            {
                kind: 'github',
                href: 'https://github.com/only-bugs',
                label: 'Shashank on GitHub',
            },
            {
                kind: 'email',
                href: 'mailto:pshashank0502@gmail.com',
                label: 'Email Shashank',
            },
        ],
    },
    {
        name: 'Terry Chen',
        role: 'Product & Data Lead • Carbon Persona',
        description:
            'I connect human centred design with dependable data pipelines. I own onboarding flows and persona visuals while pairing them with AWS APIs and Spark and Kafka powered predictions.',
        focus: 'React Native, TypeScript, Figma, AWS, PySpark ML, R, SQL.',
        icon: Puzzle,
        socials: [
            {
                kind: 'linkedin',
                href: 'https://www.linkedin.com/in/chen-terry-75aaa8257/',
                label: 'Terry on LinkedIn',
            },
            {
                kind: 'github',
                href: 'https://github.com/TerryXBT',
                label: 'Terry on GitHub',
            },
            {
                kind: 'email',
                href: 'mailto:tche1230@gmail.com',
                label: 'Email Terry',
            },
        ],
    },
    {
        name: 'Manshu Hu',
        role: 'UX/UI Designer • Content Specialist',
        description:
            'I shape smooth user journeys and craft the documentation that keeps our product storytelling clear. I curate visual assets so every touchpoint feels consistent and intentional.',
        focus: 'Figma, Adobe XD, Miro, Canva, Google Workspace, Vue.',
        icon: PenTool,
        socials: [
            {
                kind: 'linkedin',
                href: 'https://www.linkedin.com/in/manshu-hu-20401b395',
                label: 'Manshu on LinkedIn',
            },
            {
                kind: 'email',
                href: 'mailto:manshuhu99@gmail.com',
                label: 'Email Manshu',
            },
        ],
    },
    {
        name: 'Sze Ming (Martin) Hui',
        role: 'Cybersecurity Engineer • Backend Developer',
        description:
            'I plan and test secure infrastructure inside AWS environments. My focus is building scalable services with strong guardrails, from pentesting to resilient backend foundations.',
        focus: 'Frida, BurpSuite, Metasploit, MobSF, Wireshark, GNS3, AWS services.',
        icon: ShieldHalf,
        socials: [
            {
                kind: 'linkedin',
                href: 'https://www.linkedin.com/in/sze-ming-hui-baa202225/',
                label: 'Martin on LinkedIn',
            },
            {
                kind: 'github',
                href: 'https://github.com/mmh11',
                label: 'Martin on GitHub',
            },
            {
                kind: 'email',
                href: 'mailto:huim13a@gmail.com',
                label: 'Email Martin',
            },
        ],
    },
    {
        name: 'Chenwei (Yoyo) Ma',
        role: 'UX/UI Specialist • Content Specialist',
        description:
            'I focus on our user lens through market analysis and product direction. I translate requirements into UI design and partner with frontend developers to clarify epics, acceptance criteria, and delivery. I led the early research and continue to explore the experience with players and books for inspiration.',
        focus: 'Figma, Adobe XD, Miro, Canva, Google Workspace.',
        icon: Palette,
        socials: [
            {
                kind: 'linkedin',
                href: 'https://www.linkedin.com/in/chenwei-ma-7b1b44346',
                label: 'Yoyo on LinkedIn',
            },
            {
                kind: 'email',
                href: 'mailto:machenwei0122@gmail.com',
                label: 'Email Yoyo',
            },
        ],
    },
    {
        name: 'Harine Mohanram',
        role: 'Data Scientist',
        description:
            'I enjoy turning raw information into insight through modelling, validation, and precise documentation. I am driven by curiosity, clear problem solving, and responsible data practice with a constant appetite for learning.',
        focus: 'SQL, Python, PySpark ML, R, Data modelling, Analytics, Testing.',
        icon: BarChart3,
        socials: [
            {
                kind: 'linkedin',
                href: 'https://www.linkedin.com/in/harine-mohanram',
                label: 'Harine on LinkedIn',
            },
            {
                kind: 'email',
                href: 'mailto:harinem30@gmail.com',
                label: 'Email Harine',
            },
        ],
    },
];

const socialStyles: Record<
    SocialKind,
    { icon: LucideIcon; className: string }
> = {
    linkedin: {
        icon: Linkedin,
        className:
            'text-sky-600 hover:text-sky-700 focus-visible:text-sky-700',
    },
    github: {
        icon: Github,
        className:
            'text-gray-700 hover:text-gray-900 focus-visible:text-gray-900',
    },
    email: {
        icon: Mail,
        className:
            'text-rose-500 hover:text-rose-600 focus-visible:text-rose-600',
    },
};

export default function Team() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-white via-white to-gray-50"
            aria-labelledby="team-title"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-100/80 to-transparent" />

            <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                                    Team Verde
                                </p>
                                <h1
                                    id="team-title"
                                    className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                                >
                                    Meet the people behind Verde
                                </h1>
                                <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                                    Verde helps urban professionals turn
                                    awareness into action with trackable,
                                    beautiful tools. Our cross-disciplinary team
                                    pairs climate empathy with rigorous systems
                                    thinking so the product feels trustworthy
                                    and inspiring.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowDetails((prev) => !prev)
                                    }
                                    className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-5 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                                    aria-expanded={showDetails}
                                >
                                    {showDetails ? 'Show less' : 'Learn more'}
                                </button>

                                <a
                                    href="https://github.com/Only-Bugs/Verde/releases"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                                >
                                    Download the app
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            showDetails
                                ? 'mt-8 max-h-[1200px] opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="space-y-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                            <div>
                                <h2 className="text-lg font-semibold text-emerald-700">
                                    About Verde
                                </h2>
                                <p className="mt-3 text-base leading-relaxed text-gray-600">
                                    Verde bridges the gap between climate
                                    intention and everyday behaviour. By
                                    visualising emissions data as growth in your
                                    carbon persona, it keeps sustainability
                                    engaging through milestones, challenges, and
                                    community rewards.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-emerald-700">
                                    Who we design for
                                </h2>
                                <p className="mt-3 text-base leading-relaxed text-gray-600">
                                    Digital-first professionals who care about
                                    the planet and want clear, beautiful tools
                                    to act consistently. Verde offers a personal
                                    sustainability journey that stays
                                    measurable, social, and motivating.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {teamMembers.map((member) => {
                        const MemberIcon = member.icon;

                        return (
                            <article
                                key={member.name}
                                className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                                aria-label={member.name}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600 sm:h-20 sm:w-20">
                                        <MemberIcon
                                            className="h-8 w-8 sm:h-10 sm:w-10"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <header>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {member.name}
                                            </h3>
                                            <p className="mt-1 text-sm font-medium text-gray-500">
                                                {member.role}
                                            </p>
                                        </header>

                                        <p className="text-sm leading-relaxed text-gray-600">
                                            {member.description}
                                        </p>

                                        <p className="text-sm leading-relaxed text-gray-700">
                                            <span className="font-semibold text-emerald-700">
                                                Current focus:
                                            </span>{' '}
                                            {member.focus}
                                        </p>

                                        <div className="flex items-center gap-4 pt-2">
                                            {member.socials.map((social) => {
                                                const socialMeta =
                                                    socialStyles[social.kind];
                                                const SocialIcon =
                                                    socialMeta.icon;

                                                return (
                                                    <a
                                                        key={social.href}
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label={social.label}
                                                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-base transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${socialMeta.className}`}
                                                    >
                                                        <SocialIcon className="h-5 w-5" />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
