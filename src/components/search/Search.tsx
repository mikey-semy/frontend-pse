import React, { useState } from 'react';
import { searchQuestions } from '../../api';
import { QuestionItem } from '../../types';
import Button from '../buttons/Button';
import Loader from 'react-ts-loaders';
import ErrorMessage from '../error/ErrorMessage';
const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<QuestionItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (searchText.trim() === '') {
      setError('Пожалуйста, введите текст для поиска.');
      return;
    }
    setSearchResults([]);
    try {
      setLoading(true);
      const results = await searchQuestions(searchText);
      if (results.length === 0) {
        setError('Вопрос не найден.');
      } else {
        setSearchResults(results);
      }
    } catch (error) {
      setError('Произошла ошибка при поиске вопросов.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className='form--search' onSubmit={handleSubmit}>
        <input
          type='text'
          id='search-input'
          className='input--search'
          placeholder='Введите текст для поиска'
          value={searchText}
          onChange={handleChange}
        />
        <Button
          type='submit'
          icon='🔍'
          title=''
          className='button--search'
          disabled={loading}
        />
      </form>
      {loading && <Loader
                    type="dualring"
                    color="#aa0000"
                    size={150}
                  />}
      
      {error && <ErrorMessage message={error} />}
      <div className={`search-results ${searchResults.length > 0 ? 'show' : 'hide'}`}>
        {searchResults.map((item) => (
          <div className='card' key={item.id}>
            <h3>{item.question_text}</h3>
            {item.answers && item.answers.length > 0 && (
              <div>
                <strong>Ответы:</strong>
                <ul>
                  {item.answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.correct_answers && item.correct_answers.length > 0 && (
              <div>
                <strong>Правильные ответы:</strong>
                <ul>
                  {item.correct_answers.map((correctAnswer, index) => (
                    <li key={index}>{correctAnswer}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
