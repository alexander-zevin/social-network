export interface IGetUsers {
    (currentPage: number, pageSize: number): void
}

export interface IUser {
    id: number
    name: string
    status: string | null
    photos: {
        small: string | null,
        large: string | null
    }
    followed: boolean
}
export interface IUsers {
    users: Array<IUser>
}