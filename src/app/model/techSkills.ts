export class TechSkills {
    id?: number;
    persona_id: number;
    skillName: string;
    skillLevel: number;

    constructor(persona_id: number, skillName: string, skillLevel: number) {
        this.persona_id = persona_id;
        this.skillName = skillName;
        this.skillLevel = skillLevel;
    }
}
