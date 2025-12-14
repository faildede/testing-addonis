# My AdonisJS API 
Тестовый проект для изучения возможностей **AdonisJS v6** с автоматической генерацией Swagger/OpenAPI документации.

##  О проекте

Этот проект был создан для:
- Демонстрации CRUD операций в AdonisJS
- Интеграции `adonis-autoswagger` для автоматической генерации API документации
- Практики с миграциями БД, моделями и сервис-слоем
- Использования Scalar для красивого отображения OpenAPI спецификации

### Основные компоненты

- **Модель Product** — управление товарами (title, price, description)
- **ProductService** — бизнес-логика CRUD операций
- **ProductsController** — HTTP handlers для всех CRUD операций
- **Миграции** — автоматическое создание и обновление таблицы в БД
- **Factory & Seeder** — генерация тестовых данных

## API Endpoints

Все эндпоинты реализованы по стандарту REST (apiOnly):

| Метод | Путь | Описание |
|-------|------|---------|
| `GET` | `/products` | Получить все товары |
| `GET` | `/products/:id` | Получить товар по ID |
| `POST` | `/products` | Создать новый товар |
| `PATCH` | `/products/:id` | Обновить товар |
| `DELETE` | `/products/:id` | Удалить товар |

### Пример использования

**Создание товара:**
```bash
curl -X POST http://localhost:3333/products \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Ноутбук",
    "price": 50000,
    "description": "Мощный ноутбук для работы"
  }'
```

**Получение всех товаров:**
```bash
curl http://localhost:3333/products
```

**Обновление товара:**
```bash
curl -X PATCH http://localhost:3333/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Ноутбук Pro",
    "price": 60000
  }'
```

**Удаление товара:**
```bash
curl -X DELETE http://localhost:3333/products/1
```

##  Документация API

API документация автоматически генерируется и доступна в двух форматах:

- **Swagger YAML** — `http://localhost:3333/api-docs`
- **Scalar UI** — `http://localhost:3333/api-docs/scalar` (рекомендуется)
- **JSON** — `http://localhost:3333/api-docs/json`

##  Установка и запуск

### Шаги установки

1. **Клонировать/установить зависимости:**
```bash
npm install
```

2. **Настроить окружение:**
```bash
cp .env.example .env
```

3. **Запустить миграции:**
```bash
node ace migration:run
```

4. **Заполнить БД тестовыми данными (опционально):**
```bash
node ace db:seed
```

5. **Запустить сервер:**
```bash
npm run dev
```

Сервер запустится на `http://localhost:3333`

## Доступные команды

```bash
# Режим разработки с hot-reload
npm run dev

# Продакшн сборка
npm run build

# Запуск в продакшене
npm start

# Тестирование
npm run test

# Проверка типов TypeScript
npm run typecheck

# Линтинг кода
npm run lint

# Форматирование кода
npm run format

# Миграции БД
node ace migration:run           # Запустить миграции
node ace migration:rollback      # Откатить последнюю миграцию

# Генерация моделей и других артефактов
node ace make:model User         # Создать модель
node ace make:controller User    # Создать контроллер
node ace make:migration          # Создать миграцию
```

##  Структура проекта

```
my-app/
├── app/
│   ├── controllers/      # HTTP обработчики
│   ├── models/           # Модели БД (Lucid ORM)
│   ├── services/         # Бизнес-логика
│   ├── middleware/       # Middleware
│   └── exceptions/       # Обработка ошибок
├── config/               # Конфигурационные файлы
│   └── openapi.ts        # Настройки Swagger/Scalar
├── database/
│   ├── migrations/       # Миграции БД
│   ├── factories/        # Фабрики для тестирования
│   └── seeders/          # Сидеры для заполнения БД
├── start/
│   ├── routes.ts         # Определение маршрутов
│   ├── kernel.ts         # Middleware регистрация
│   └── env.ts            # Переменные окружения
└── tests/                # Тесты
```

##  Технологический стек

- **Framework**: AdonisJS v6
- **Language**: TypeScript
- **ORM**: Lucid (встроенная в AdonisJS)
- **Database**: SQLite (по умолчанию) / PostgreSQL / MySQL
- **API Documentation**: adonis-autoswagger + Scalar UI
- **Validation**: Vine
- **HTTP Client**: Built-in с AdonisJS

## Дополнительные ресурсы

- [AdonisJS документация](https://docs.adonisjs.com/)
- [Lucid ORM документация](https://docs.adonisjs.com/reference/orm)
- [adonis-autoswagger GitHub](https://github.com/ad-on-is/adonis-autoswagger)
- [Scalar UI документация](https://scalar.com/)

## Полезные советы

1. **Hot Reload** — при сохранении файлов сервер автоматически перезагружается в режиме `npm run dev`
2. **Типизация** — используйте `npm run typecheck` для проверки типов
3. **Тестирование** — используйте `npm run test` для запуска тестов (JAPA)
4. **Документация** — открывайте `/api-docs/scalar` во время разработки для визуализации API

**Создано для экспериментирования с AdonisJS** 
