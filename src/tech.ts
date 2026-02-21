import type { Icon } from './types'

import { 
    IoLogoCss3, IoLogoHtml5, IoLogoJavascript
} from "react-icons/io";

export const ICONS = {
    css: {
        color_main: '#498FE4',
        color_border: '#498FE420',
        icon: IoLogoCss3
    },
    html:{
        color_main: '#E08331',
        color_border: '#E0833120',
        icon: IoLogoHtml5 
    },
    javascript: {
        color_main: '#D9C426',
        color_border: '#D9C42620',
        icon: IoLogoJavascript
    }
} satisfies Record<string, Icon>

export type IconKey = keyof typeof ICONS