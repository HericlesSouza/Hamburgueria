export interface iAuthProvider {
    children: React.ReactNode
}

export interface iAuthProviderValue {
   checkValidUser: (rota:string) => void
}