export interface iSource {
    id: string,
    name: string,
    description: string,
    url: string
}

export interface iPortal {
    sources: iSource[]
}