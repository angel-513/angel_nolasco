import type { Skills, SocialProps, AboutCardProps } from '../interfaces/interfaces.ts'

export const socialIcons: SocialProps[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/angel-513',
        icon: 'github'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/%C3%A1ngel-obed-nolasco-herrera/',
        icon: 'linkedin-square'
    }
];

export const cards: AboutCardProps[] = [
    {
        title: 'Apasionado de las Artes Marciales',
        description: 'Soy un <span class="text-[#CB80FF]">apasionado</span> por las artes marciales y los deportes de contacto. La práctica de este tipo de disciplinas de la mano de excelentes maestros me ha inculcado valores fundamentales en mi vida como el <span class="text-[#CB80FF]">respeto, la resiliencia, la lealtad, la colaboración y la honestidad</span>; además, he desarrollado una gran <span class="text-[#CB80FF]">adaptación ante nuevos desafíos</span> y un enfoque en la mejora continua.'
    }
];

export const skills: Skills = {
    'Backend': [
        { name: 'NodeJS', level: 3.5, 
            img: 'img/nodejs.svg' },
        { name: 'PHP', level: 3.5 , 
            img: 'img/php.png' },
        { name: 'TypeScript', level: 3, 
            img: 'img/typescript.png' },
        { name: 'SpringBoot', level: 2, 
            img: 'img/springboot.png' },
        { name: 'Laravel', level: 1, 
            img: 'img/laravel.png' }
    ],
    'Frontend': [
        { name: 'JavaScript', level: 3, 
            img: 'img/js.png' },
        { name: 'HTML', level: 2, 
            img: 'img/html.png' },
        { name: 'CSS', level: 2, 
            img: 'img/css.png' },
        { name: 'Tailwind', level: 1, 
            img: 'img/tailwind.png' },
        { name: 'Astro', level: 1 , 
            img: 'img/astro.png' },
    ],
    'AI y Ciencia de datos': [
        { name: 'Python', level: 4, 
            img: 'img/python.png' },
        { name: 'Pytorhc', level: 3.5, 
            img: 'img/pytorch.png' },
        { name: 'Numpy', level: 2, 
            img: 'img/numpy.png' },
        { name: 'Pandas', level: 2, 
            img: 'img/pandas.png' },
    ],
    'Bases de datos': [
        { name: 'SQL Server', level: 3,
            img: 'img/sqlserver.png' },
        { name: 'MySQL', level: 3,
            img: 'img/mysql.png'
        },
        { name: 'MongoDB', level: 2.5, 
            img: 'img/mongodb.png' }
    ]
}
