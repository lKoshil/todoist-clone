# 📝 Todoist Clone на React + Firebase

[![CodeFactor](https://www.codefactor.io/repository/github/lkoshil/todoist-clone/badge)](https://www.codefactor.io/repository/github/lkoshil/todoist-clone)

Полнофункциональное веб-приложение для управления задачами с авторизацией пользователей, облачной базой данных и real-time обновлениями.

## 🛠 Стек технологий

| Категория | Технологии |
|-----------|------------|
| **Frontend** | React 18, Vite, React Router |
| **Backend** | Firebase (BaaS) |
| **База данных** | Firebase Firestore (NoSQL) |
| **Авторизация** | Firebase Authentication |
| **Стили** | CSS3 (градиенты, адаптив) |
| **Деплой** | Vercel |
| **Анализ кода** | CodeFactor |

## 🔗 Ссылки

- **GitHub:** https://github.com/lKoshil/todoist-clone
- **Деплой:** https://todoist-clone-delta.vercel.app/
- **CodeFactor:** [![CodeFactor](https://www.codefactor.io/repository/github/lkoshil/todoist-clone/badge)](https://www.codefactor.io/repository/github/lkoshil/todoist-clone)

## ✨ Реализованный функционал

### 🔐 Авторизация
- Регистрация новых пользователей (email + пароль)
- Вход в систему
- Выход из аккаунта
- Защищённые маршруты (ProtectedRoute)
- Автоматический редирект на `/login` при отсутствии авторизации

###  Управление задачами (CRUD)
-  **Создание** задач с названием, описанием и приоритетом
-  **Просмотр** списка задач в реальном времени
-  **Редактирование** существующих задач
-  **Удаление** задач с подтверждением
-  **Отметка** задач как выполненных (чекбокс)

### 🎨 Дополнительные фичи
- Три уровня приоритета (низкий/средний/высокий) с цветовой индикацией
- Счётчик задач в заголовке
- Real-time обновления через Firestore onSnapshot
- Фильтрация задач по текущему пользователю
- Адаптивный дизайн
- Визуальная обратная связь (hover-эффекты, disabled-состояния)
