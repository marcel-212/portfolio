import type { IconType } from "react-icons"
import type { IconKey } from "./tech"

export type Icon = {
    color_main: string
    color_border: string
    icon: IconType
}

export type Tech = {
    id: number
    name: string
    type: IconKey
    href: string
}

export type Site = {
    id: number
    title: string
    image: string
    description: string
    repository: string
    tech: Tech[]
}