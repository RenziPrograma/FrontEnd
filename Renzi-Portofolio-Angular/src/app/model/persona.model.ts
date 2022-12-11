export class persona{
    id?: number;
    name: string;
    surname: string;
    position: string;
    base: string;
    email: string;
    telephone: string;
    profileImageUrl: string;
    representativaImageUrl: string;
    description: string;

    constructor(name: string,
        surname: string,
        position: string,
        base: string,
        email: string,
        telephone: string,
        profileImageUrl: string,
        representativaImageUrl: string,
        description: string) {
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.base = base;
        this.email = email;
        this.telephone = telephone;
        this.profileImageUrl = profileImageUrl;
        this.representativaImageUrl = representativaImageUrl;
        this.description = description;
        }

}