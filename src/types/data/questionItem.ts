export interface QuestionItem {
    id: number;
    question_type: string;
    question_text: string;
    answers: string[];
    correct_answers: string[];
    created_at: Date;
    updated_at: Date;
}