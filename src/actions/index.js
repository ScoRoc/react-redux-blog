import { ADD_ARTICLE } from '../constants/action-types';

// actions are objects, build an action with a simple function that takes 1 parameter
// it returns a new ready to dispatch action object with a 'type' and 'payload'
export const addArticle = article => (
  { type: ADD_ARTICLE, payload: article }
)
