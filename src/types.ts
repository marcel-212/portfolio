export type Site = {
    id: number
    title: string
    image: string
    description: string
    repository: string
    tech: {
        id: number
        name: string
        icon: string
        href: string
    }[]
}