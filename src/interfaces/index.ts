export interface CardProjectProps {
    title: string;
    subtitle: string;
    img: string;
    description: string;
    deploy: string;
}

export interface Skill {
    skill: string
    image: string
}

export interface Skills {
    frontEnd: Skill[]
    backEnd: Skill[]
    others: Skill[]
    softs: string[]
}