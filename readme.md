# Re:Reddit 

### Описание:
Копия реддита на React, возможность просматривать посты и ветки комментариев к отдельным постам.
#### [Приложение в работе](https://my-app-redd.herokuapp.com/)

### Запуск

Dev сборка - `npm run dev`
Build сборка - `npm run build`

Для корректной работы авторизации необходимо получить токен для Reddit API:
[Инструкция](https://stackoverflow.com/questions/28955541/how-to-get-access-token-reddit-api)
и установить глобальные переменные или прописать их в `config.js`

```javascript
    URI_MAIN: 'YOUR_URI_MAIN',
    SECRET: 'YOUR_SECRET',
    CLIENT_ID: 'YOUR_CLIENT_ID',
```


### Технологии:
- Typescript 
- React 
- react-router 
- redux-toolkit 
- express 
- webpack 
- SSR 
- Intersection Observer API 
- lazy Loading

### Реализация:
- Все приложиние написано на Typescript
- Приложение написано на функциональных компонентах, используются хуки
- доступна авторизация через Reddit API
- реализован серверный рендеринг
- При помощи Intersection Observer API добавлена ленивая загрузка постов
- собирается приложение через Webpack
- Серверная часть сделана на express
- Стейт менеджмент, в том числе асинхронный реализован redux-toolkit
- Роутинг сделан при помощи react-router
- Приложение задеплоино на [Heroku](https://my-app-redd.herokuapp.com/)
- Модальные окна реализованы через Порталы

