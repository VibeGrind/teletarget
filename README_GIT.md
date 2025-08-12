# TGate - Git Deployment Guide

## Описание проекта
TGate - это React-приложение для поиска каналов, групп и форумов в Telegram. Минималистичный дизайн с поисковой строкой, фильтрами и результатами поиска.

## Структура проекта
```
teletarget/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Шапка с логотипом и поиском
│   │   ├── FilterSection.tsx       # Контейнер для всех фильтров
│   │   ├── TechnicalFilters.tsx    # Технические фильтры (ID, хэштеги, ссылки)
│   │   ├── UserFilters.tsx         # Пользовательские фильтры (метаданные)
│   │   ├── TextFormatFilters.tsx   # Фильтры форматирования текста
│   │   ├── ResultsGrid.tsx         # Сетка результатов поиска
│   │   └── ChannelCard.tsx         # Карточка канала/группы
│   ├── App.tsx                     # Главный компонент
│   └── index.tsx                   # Точка входа
├── public/
│   ├── logos/                      # Логотипы каналов (.jpg файлы)
│   └── index.html                  # HTML шаблон
└── package.json                    # Конфигурация и скрипты
```

## Конфигурация для GitHub Pages

### 1. package.json настройки
```json
{
  "homepage": "https://vibegrind.github.io/teletarget",
  "devDependencies": {
    "gh-pages": "^6.3.0"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 2. Настройка Git репозитория
```bash
# Инициализация репозитория (если ещё не сделано)
git init
git remote add origin https://github.com/VibeGrind/teletarget.git

# Настройка пользователя Git
git config user.name "VibeGrind"
git config user.email "your-email@example.com"
```

### 3. Настройка GitHub токена
Для автоматического развертывания нужен GitHub Personal Access Token:
1. GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Выберите scopes: repo, workflow
4. Добавьте токен в удаленный репозиторий:
```bash
git remote set-url origin https://ghp_TOKEN@github.com/VibeGrind/teletarget.git
```

## Процесс развертывания

### Команды для развертывания:
```bash
# Сборка и развертывание одной командой
npm run deploy

# Или пошагово:
npm run build                    # Создает build/ директорию
gh-pages -d build               # Публикует содержимое build/ на gh-pages ветку
```

### Процесс развертывания:
1. `npm run predeploy` - автоматически запускается перед deploy
2. `npm run build` - создает оптимизированную сборку в `/build`
3. `gh-pages -d build` - создает/обновляет ветку `gh-pages`
4. GitHub Pages автоматически публикует содержимое ветки `gh-pages`

## GitHub Pages настройки

### В настройках репозитория:
1. Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages`
4. Folder: `/ (root)`

### URL сайта:
https://vibegrind.github.io/teletarget/

## Особенности для GitHub Pages

### Пути к изображениям:
```typescript
// В production используется префикс /teletarget/
avatar: process.env.NODE_ENV === 'production' 
  ? '/teletarget/logos/channel-1.jpg' 
  : '/logos/channel-1.jpg'
```

### Структура файлов после сборки:
```
build/
├── index.html                  # Главная страница
├── static/
│   ├── css/main.*.css         # Стили
│   └── js/main.*.js           # JavaScript
└── logos/                     # Копия логотипов из public/
```

## Процесс обновления

### Для обновления сайта:
1. Внесите изменения в код
2. Зафиксируйте изменения:
```bash
git add .
git commit -m "Описание изменений"
git push
```
3. Разверните обновления:
```bash
npm run deploy
```
4. Подождите 1-2 минуты для обновления кеша GitHub Pages

## Частые проблемы и решения

### 1. Сайт показывает стандартную страницу React
**Решение:** Принудительная пересборка и развертывание
```bash
npm run build
npm run deploy
```

### 2. Изображения не загружаются
**Причина:** Неправильные пути для GitHub Pages  
**Решение:** Проверьте пути в коде (должны содержать `/teletarget/` для production)

### 3. Authentication failed
**Причина:** Проблемы с GitHub токеном  
**Решение:** Обновите токен в remote URL

### 4. Изменения не отображаются
**Причина:** Кеш GitHub Pages  
**Решение:** Подождите 2-5 минут или добавьте параметр `?v=timestamp` к URL

## Файлы в репозитории

### Основные ветки:
- `master` - исходный код
- `gh-pages` - собранное приложение (создается автоматически)

### Не забудьте добавить в .gitignore:
```
node_modules/
build/
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## Команды для разработки
```bash
npm start          # Запуск в режиме разработки (localhost:3000)
npm run build      # Сборка для production
npm test           # Запуск тестов
npm run deploy     # Сборка и развертывание на GitHub Pages
```

---

**Примечание:** Всегда делайте коммит изменений в master ветку перед развертыванием, чтобы сохранить историю изменений.