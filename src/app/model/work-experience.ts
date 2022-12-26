export class WorkExperience {
    id?: number;
    persona_id: number;
    businessName: string;
    position: string;
    startDate: string;
    endDate: string;
    currentJob: string;
    description: string;

    constructor(persona_id: number, businessName: string, position: string, startDate: string, endDate: string, currentJob: string, description: string) {
        this.persona_id = persona_id;
        this.businessName = businessName;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
        this.currentJob = currentJob;
        this.description = description;
    }

}

