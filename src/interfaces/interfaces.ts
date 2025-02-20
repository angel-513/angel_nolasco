export interface SocialProps {
    name: string;
    icon: string;
    url: string;
}

export interface AboutCardProps {
    title: string;
    description: string;
}

interface Skill {
    name: string;
    level: number;
    img: string;
}

export interface Skills {
    [category: string]: Skill[];
}

export interface NavbarTab {
    title: string;
    href: string;
    subtabs?: NavbarTab[];
}