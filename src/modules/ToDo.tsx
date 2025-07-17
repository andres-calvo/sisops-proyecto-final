import { useTranslation } from 'react-i18next';
import './ToDo.css';
import { useState } from 'react';

const ToDo = () => {
  const { t } = useTranslation('todo');
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div className="todo-container">
      <h2>{t('title')}</h2>
      <div className="todo-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t('placeholder')}
        />
        <button onClick={addTask}>{t('add')}</button>
      </div>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo; 