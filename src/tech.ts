import type { Icon } from './types'

import { 
    IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoSass, IoLogoPython
} from "react-icons/io";
import {
    FaPhp, FaReact, FaVuejs, FaSymfony, FaDocker, FaGitAlt, FaMicrosoft
} from "react-icons/fa";
import { 
    TbApi, TbBrandCSharp, TbSql
} from "react-icons/tb";
import {
    SiExpress, SiTailwindcss, SiMariadb, SiRedux, SiDotnet, SiTypescript, SiKnexdotjs,
    SiMongodb, SiPostgresql, SiReactquery, SiVitest
} from "react-icons/si";
import { 
    GiPineapple
} from "react-icons/gi";

export const ICONS = {
    html: {
        color_main: '#E08331',
        color_border: '#E0833160',
        icon: IoLogoHtml5
    },
    css: {
        color_main: '#498FE4',
        color_border: '#498FE460',
        icon: IoLogoCss3
    },
    js: {
        color_main: '#e6ce1a',
        color_border: '#D9C42660',
        icon: IoLogoJavascript
    },
    node: {
        color_main: '#3C873A',
        color_border: '#3C873A60',
        icon: IoLogoNodejs
    },
    php: {
        color_main: '#777BB4',
        color_border: '#777BB460',
        icon: FaPhp
    },
    csharp: {
        color_main: '#68217A',
        color_border: '#68217A60',
        icon: TbBrandCSharp
    },
    react: {
        color_main: '#61DAFB',
        color_border: '#61DAFB60',
        icon: FaReact
    },
    dotnet: {
        color_main: '#512BD4',
        color_border: '#512BD460',
        icon: SiDotnet
    },
    vue: {
        color_main: '#42B883',
        color_border: '#42B88360',
        icon: FaVuejs
    },
    symfony: {
        color_main: '#000000',
        color_border: '#00000090',
        icon: FaSymfony
    },
    express: {
        color_main: '#777777',
        color_border: '#77777760',
        icon: SiExpress
    },
    scss: {
        color_main: '#CD6799',
        color_border: '#CD679960',
        icon: IoLogoSass
    },
    tailwind: {
        color_main: '#38BDF8',
        color_border: '#38BDF860',
        icon: SiTailwindcss
    },
    docker: {
        color_main: '#2496ED',
        color_border: '#2496ED60',
        icon: FaDocker
    },
    vitest: {
        color_main: '#6E9F18',
        color_border: '#6E9F1860',
        icon: SiVitest
    },
    rtkquery: {
        color_main: '#764ABC',
        color_border: '#764ABC60',
        icon: SiReactquery
    },
    sql: {
        color_main: '#336791',
        color_border: '#33679160',
        icon: TbSql
    },
    postgres: {
        color_main: '#336791',
        color_border: '#33679160',
        icon: SiPostgresql
    },
    mongo: {
        color_main: '#47A248',
        color_border: '#47A24860',
        icon: SiMongodb
    },
    mssql: {
        color_main: '#CC2927',
        color_border: '#CC292760',
        icon: FaMicrosoft
    },
    knex: {
        color_main: '#D26B38',
        color_border: '#D26B3860',
        icon: SiKnexdotjs
    },
    rest: {
        color_main: '#FF6C37',
        color_border: '#FF6C3760',
        icon: TbApi
    },
    typescript: {
        color_main: '#3178C6',
        color_border: '#3178C660',
        icon: SiTypescript
    },
    redux: {
        color_main: '#764ABC',
        color_border: '#764ABC60',
        icon: SiRedux
    },
    pinia: {
        color_main: '#FFD859',
        color_border: '#FFD85960',
        icon: GiPineapple
    },
    git: {
        color_main: '#F05032',
        color_border: '#F0503260',
        icon: FaGitAlt
    },
    mariadb: {
        color_main: '#017294',
        color_border: '#01729460',
        icon: SiMariadb
    },
    python: {
        color_main: '#FFDE57',
        color_border: '#4584B660',
        icon: IoLogoPython
    }
} satisfies Record<string, Icon>

export type IconKey = keyof typeof ICONS