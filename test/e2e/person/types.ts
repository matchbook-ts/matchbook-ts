export class Teacher implements Person {
    constructor(name: string) {
        this.favoriteHobby = Hobby.Baking;
        this.name = name;
    }

    public favoriteHobby: Hobby;
    public name: string;
}

export interface ServiceWorker extends Person {
    name: string;
    freeTime: undefined;
    favoriteHobby: Hobby;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function isServiceWorker(_p: Person): _p is ServiceWorker {
    return false;
}

export interface Person {
    name: string;
    freeTime?: number;
    favoriteHobby?: Hobby;
}

export enum Hobby {
    Metalworking,
    Woodworking,
    Baking,
}
