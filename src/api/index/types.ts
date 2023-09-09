export interface gameShow {
    gameCode: string,
    gameName: string,
    address: string,
    registrationTime: string
    gameTime: string,
    registering: boolean,
}

export interface gameQueryParams {
    year: number,
    month: number | string | null,
}

export interface loginGameInfo{
    gameName: string,
    allowUnitNames: string[] | null
}