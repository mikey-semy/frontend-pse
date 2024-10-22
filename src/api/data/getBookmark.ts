import api from '../config';
import { handleApiResponse, handleApiError } from '../utils';

export const getBookmark = (): Promise<string> =>
  api.get<string>('/static/scripts/bookmark.new.js')
    .then(handleApiResponse)
    .catch(handleApiError);