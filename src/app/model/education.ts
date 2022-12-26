export class Education {
    id?: number;
    persona_id: number;
    schoolName :string;
    degree :string;
    startDate :string;
    endDate :string;
    description: string;
    
    constructor(persona_id: number, schoolName: string, degree: string, startDate: string, endDate: string, description: string) {
        this.persona_id = persona_id;
        this.schoolName = schoolName;
        this.degree = degree;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }
}
