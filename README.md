# Exchange terminal

Простой симулятор биржевого терминала для соединения с биржей. Интерфейс приложения состоит из тикера и списка заявок.

Тикер - виджет на котором:

- есть возможность выбрать торговый инструмент (актив)
- есть возможность выбрать объем заявки
- отображаются текущие цены на покупку и продажу выбранного инструмента в заданном объеме
- есть возможность отправить заявку на покупку или продажу

Список заявок - таблица в которой содержится информация по всем заявкам, а именно:

- идентификатор
- время создания
- время последнего изменения статуса
- статус - Active Filled Rejected Cancelled
- сторона - Buy Sell
- цена
- объем
- торговый инструмент

Тестовое задания для компании NTprogress.

## Для запуска проекта

`git clone git@github.com:CoinerLo/exchange_terminal.git`

`cd exchange_terminal`

`npm i`

`npm run dev`

## Линтинг

`npm run lint`

## Тесты

`npm run test`
