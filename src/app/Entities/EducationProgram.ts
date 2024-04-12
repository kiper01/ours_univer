
export interface EducationProgram{
    type: 'Профпереподготовка' | 'Повышение квалификации' | 'Общеразвивающая программа' | 'Профессиональное обучение'
    format: 'Онлайн' | 'Очное' | 'Смешанное';
    
    direction: string;
    price: number;
    educationStartMonth: string;
}
