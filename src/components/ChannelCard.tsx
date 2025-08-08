import React from 'react';

interface Channel {
  id: number;
  type: string;
  status: string;
  creationDate: string;
  title: string;
  about: string;
  participantsCount: number;
  onlineCount: number;
  username: string;
  avatar: string;
}

interface ChannelCardProps {
  channel: Channel;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="channel-card">
      <div className="channel-header">
        <div className="channel-avatar">
          <img 
            src={channel.avatar} 
            alt={channel.title}
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/50/9ca3af/ffffff?text=?';
            }}
          />
        </div>
        <div className="channel-info">
          <h3 className="channel-title">{channel.title}</h3>
          <p className="channel-username">{channel.username}</p>
          <div className="channel-badges">
            <span className={`channel-type ${channel.type.toLowerCase()}`}>
              {channel.type}
            </span>
            <span className={`channel-status ${channel.status.toLowerCase()}`}>
              {channel.status}
            </span>
          </div>
        </div>
        <div className="channel-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      <div className="channel-description">
        <p>{channel.about}</p>
      </div>
      
      <div className="channel-stats">
        <div className="stat-item">
          <span className="stat-label">ID:</span>
          <span className="stat-value">{channel.id}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Участники:</span>
          <span className="stat-value">{formatNumber(channel.participantsCount)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Онлайн:</span>
          <span className="stat-value">{formatNumber(channel.onlineCount)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Создан:</span>
          <span className="stat-value">{formatDate(channel.creationDate)}</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;