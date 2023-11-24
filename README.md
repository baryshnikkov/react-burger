## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start - запускаем проект
```

----

## Скрипты

- `npm run start` - Запуск проекта
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:css` - Проверка css файлов style линтером
- `npm run lint:css:fix` - Исправление css файлов style линтером

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/ru/docs/get-started/overview)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:css` - Проверка scss файлов style линтером
- `npm run lint:css:fix` - Исправление scss файлов style линтером

----

## Конфигурация проекта

Проект разработан на Webpack

Вся конфигурация хранится в ./config/build

----

## pre commit хуки

В прекоммит хуках проверяем проект линтерами, конфиг в ./husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)