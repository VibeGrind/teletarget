import React from 'react';
import ChannelCard from './ChannelCard';
import './ResultsGrid.css';

const mockChannels = [
  {
    id: 1001,
    type: 'Канал',
    status: 'Активный',
    creationDate: '2023-03-15',
    title: 'Технологии будущего',
    about: 'Новости из мира высоких технологий, искусственный интеллект и инновации',
    participantsCount: 156432,
    onlineCount: 12845,
    username: '@tech_future_ru',
    avatar: '/logos/channel-1.jpg'
  },
  {
    id: 1002,
    type: 'Группа',
    status: 'Активный',
    creationDate: '2023-01-22',
    title: 'Криптовалюты и блокчейн',
    about: 'Обсуждение криптовалют, DeFi проектов и блокчейн технологий',
    participantsCount: 89234,
    onlineCount: 7432,
    username: '@crypto_blockchain',
    avatar: '/logos/group-1.jpg'
  },
  {
    id: 1003,
    type: 'Канал',
    status: 'Активный',
    creationDate: '2023-05-08',
    title: 'Игровая индустрия',
    about: 'Новости игровой индустрии, обзоры игр и киберспорт',
    participantsCount: 234567,
    onlineCount: 18923,
    username: '@gaming_industry',
    avatar: '/logos/channel-2.jpg'
  },
  {
    id: 1004,
    type: 'Форум',
    status: 'Модерируемый',
    creationDate: '2022-11-14',
    title: 'Программирование на Python',
    about: 'Изучение Python, библиотеки, фреймворки и best practices',
    participantsCount: 67891,
    onlineCount: 5642,
    username: '@python_programming',
    avatar: '/logos/forum-1.jpg'
  },
  {
    id: 1005,
    type: 'Канал',
    status: 'Активный',
    creationDate: '2023-07-03',
    title: 'Дизайн и UX/UI',
    about: 'Тренды в дизайне, UX/UI советы и вдохновение для дизайнеров',
    participantsCount: 123456,
    onlineCount: 9876,
    username: '@design_ux_ui',
    avatar: '/logos/channel-3.jpg'
  },
  {
    id: 1006,
    type: 'Группа',
    status: 'Активный',
    creationDate: '2023-02-18',
    title: 'Маркетинг и SMM',
    about: 'Стратегии маркетинга, социальные сети и продвижение бизнеса',
    participantsCount: 198743,
    onlineCount: 15432,
    username: '@marketing_smm',
    avatar: '/logos/group-2.jpg'
  }
];

const ResultsGrid: React.FC = () => {
  return (
    <div className="results-section">
      <div className="results-content">
        <div className="results-header">
          <h2>Результаты поиска</h2>
          <span className="results-count">Найдено: {mockChannels.length} каналов</span>
        </div>
        <div className="results-grid">
          {mockChannels.map(channel => (
            <ChannelCard key={channel.id} channel={channel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsGrid;