import api from '../config';
import { handleApiResponse, handleApiError } from '../utils';
import { QuestionItem } from '../../types/';

export const searchQuestions = (questionText: string): Promise<QuestionItem[]> =>
    api.get<QuestionItem[]>(`https://api.pse.aedb.online/search`, { params: { q: questionText } })
      .then(handleApiResponse)
      .catch(handleApiError);