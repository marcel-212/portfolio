import type { IconType } from "react-icons"
import type { IconKey } from "./tech"

export type Icon = {
    color_main: string
    color_border: string
    icon: IconType
}

export type TechObject = {
    id: number
    name: string
    href: string
}

export type Tech = {
    [key in IconKey]: TechObject
}

export type Site = {
    id: number
    title: string
    image: string
    description: string
    repository: string
    repository_backend?: string
    tech: IconKey[]
}

export type Test = {}