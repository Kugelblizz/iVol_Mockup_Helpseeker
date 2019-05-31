export class TaskTemplate {
    id: string;
    name: string;
    creator: string;
    modifiedOn: Date;
    status: string;

    description?: string;
    startDate?: Date;
    endDate?: Date;
    requiredCompetences?: any[];
    acquirableCompetences?: any[];
    workflowKey?: string;
  }

  export class TaskForm {
    id: string;
    name: string;
    description: string;
    priority: string;
    project: string;

    startDate: Date;
    deadline: Date;
    
    competence: string;

  }