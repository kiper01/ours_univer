import { EducationProgram } from "./EducationProgram";


export interface EnrolleeRequest {
    program: EducationProgram;
    state: 'Открыта' | 'В работе' | 'Закрыта' | 'Отменена';
  }