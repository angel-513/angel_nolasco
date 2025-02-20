import type { Skills, SocialProps, AboutCardProps, NavbarTab } from '../interfaces/interfaces.ts'

export const socialIcons: SocialProps[] = [
    {
        name: 'GitHub',
        icon: '',
        url: ''
    },
    {
        name: 'LinkedIn',
        icon: '',
        url: ''
    }
];

export const cards: AboutCardProps[] = [
    {
        title: 'Angel Nolasco',
        description: 'Soy Ingeniero en Sistemas con habilidades en el desarrollo fullstack, aunque mi verdadera fortaleza está en el desarrollo backend y la gestión de bases de datos. Mi enfoque está en crear soluciones basadas en software robustas, escalables y seguras que optimicen el rendimiento las operaciones y los sistemas de las organizaciones. Además, he trabajado en proyectos pequeños de redes neuronales, lo que me ha permitido explorar el potencial de la inteligencia artificial en el desarrollo de soluciones innovadoras. Mi objetivo es contribuir al crecimiento tecnológico de las organizaciones, impulsando la innovación y la eficiencia operativa.'
    },
    {
        title: 'Sobre Mi',
        description: 'Soy un apasionado de los deportes, especialmente de las artes marciales y los deportes de contacto. He practicado Muay Thai, Taekwondo y Judo bajo la guía de excelentes maestros que no solo me han enseñado técnicas, sino también valores fundamentales que aplico en cada aspecto de mi vida, como el respeto, la perseverancia, la resiliencia, la lealtad, la colaboración, la integridad y la honestidad. Estas disciplinas han fortalecido mi capacidad para trabajar en equipo, adaptarme a los desafíos y mantener un enfoque constante en la mejora continua.'
    }
];

export const skils: Skills = {
    'Frontend': [
        { name: 'JavaScript', level: 3, 
            img: '' },
        { name: 'Astro', level: 3 , 
            img: '' },
        { name: 'HTML', level: 2, 
            img: '' },
        { name: 'CSS', level: 2, 
            img: '' },
        { name: 'Tailwind', level: 2, 
            img: '' }
    ],
    'Backend': [
        { name: 'NodeJS', level: 3.5, 
            img: '' },
        { name: 'Express', level: 3.5, 
            img: '' },
        { name: 'PHP', level: 3.5 , 
            img: '' },
        { name: 'TypeScript', level: 3, 
            img: '' },
        { name: 'Springboot', level: 2, 
            img: '' },
        { name: 'Laravel', level: 1.5, 
            img: '' }
    ],
    'AI y Ciencia de datos': [
        { name: 'Python', level: 4, 
            img: '' },
        { name: 'Pytorhc', level: 3.5, 
            img: '' },
        { name: 'Numpy', level: 3, 
            img: '' },
        { name: 'Pandas', level: 3 , 
            img: '' }
    ],
    'Bases de datos': [
        { name: 'SQL', level: 3, 
            img: '' },
        { name: 'MongoDB', level: 2.5, 
            img: '' }
    ]
}
