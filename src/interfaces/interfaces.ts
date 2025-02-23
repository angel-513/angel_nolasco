export interface SocialProps {
    name: string;
    url: string;
    icon: string;
}

export interface AboutCardProps {
    title: string;
    description: string;
}

export interface Skill {
    name: string;
    level: number;
    img: string;
}

export interface Skills {
    [category: string]: Skill[];
}
