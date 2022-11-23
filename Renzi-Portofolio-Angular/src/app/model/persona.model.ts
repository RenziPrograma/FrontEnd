export class persona{
    id?: number;
    name: String;
    surname: String;
    position: String;
    base: String;
    email: String;
    telephone: String;
    profileImageUrl: String;
    representativaImageUrl: String;
    description: String;

    constructor(name: String,
        surname: String,
        position: String,
        base: String,
        email: String,
        telephone: String,
        profileImageUrl: String,
        representativaImageUrl: String,
        description: String) {
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