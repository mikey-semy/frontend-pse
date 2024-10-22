import React, { useState } from 'react';
import { searchQuestions } from '../../api';
import { QuestionItem } from '../../types';
import Button from '../buttons/Button';

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
    setError(''); // Reset error state on new search
    try {
      setLoading(true);
      const results = await searchQuestions(searchText);
      setSearchResults(results);
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
          type="text"
          id="search-input"
          className="search-input"
          placeholder="Введите текст для поиска"
          value={searchText}
          onChange={handleChange}
        />
        <Button 
          type="submit" 
          icon={'🔍'} 
          title={'Поиск'}  
          className="button--search"
          disabled={loading}
        />
      </form>
      {loading && <p>Загрузка...</p>}
      {error && <p className="error">{error}</p>}
      <ul id="search-results">
        {searchResults.map((item) => (
          <li key={item.id}>
            <strong>{item.question_text}</strong> <br />
            {/* <em>Тип: {item.question_type}</em> <br />
            <span>Создано: {item.created_at.toLocaleString()}</span> <br /> */}
            <div>
              <strong>Ответы:</strong>
              <ul>
                {(Array.isArray(item.answers) ? item.answers : []).map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Правильные ответы:</strong>
              <ul>
                {(Array.isArray(item.correct_answers) ? item.correct_answers : []).map((correctAnswer, index) => (
                  <li key={index}>{correctAnswer}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Search;