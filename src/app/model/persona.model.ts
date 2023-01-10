export class persona{
    id?: number;
    name: string;
    surname: string;
    position: string;
    base: string;
    email: string;
    telephone: string;
    profileImageUrl: string;
    representaImg: string;
    description: string;

    constructor(
        id:number,
        name: string,
        surname: string,
        position: string,
        base: string,
        email: string,
        telephone: string,
        profileImageUrl: string,
        representaImg: string,
        description: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.base = base;
        this.email = email;
        this.telephone = telephone;
        this.profileImageUrl = profileImageUrl;
        this.representaImg = representaImg;
        this.description = description;
        }

}