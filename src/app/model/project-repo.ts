export class ProjectRepo {
    id?: number;
    persona_id: number;
    name: string;
    link: string;
    img: string;
    description: string;

    constructor(
        persona_id: number,
        name: string,
        link: string,
        img: string,
        description: string) {
        this.persona_id = persona_id;
        this.name = name;
        this.link = link;
        this.img = img;
        this.description = description;
    }

}
