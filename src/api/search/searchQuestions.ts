import api from '../config';
import { handleApiResponse, handleApiError } from '../utils';
import { QuestionItem } from '../../types/';

export const searchQuestions = (questionText: string): Promise<QuestionItem[]> =>
    api.get<QuestionItem[]>(`/search`, { params: { q: questionText } })
      .then(handleApiResponse)
      .catch(handleApiError);