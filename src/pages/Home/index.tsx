import { useCallback, useContext, useState } from 'react'
import { TickerModalWindow } from '../../components/TickerModalWindow'
import { getInstrumentDataById } from '../../utils'
import { Ticker } from '../../components/Ticker'
import { InstrumentListContext } from '../../context/InstrumentList'
import { UserSection } from '../../components/UserSection'
import { ConnectContext } from '../../context/Connect'
import './Home.css'

export const Home = () => {
  const { instrumentList, setInstrumentList } = useContext(
    InstrumentListContext
  )
  const { wsConnect } = useContext(ConnectContext)
  const [isOpenTickerModalWindow, setIsOpenTickerModalWindow] = useState(false)

  const addTicker = useCallback((instrumentId: number) => {
    const instrument = getInstrumentDataById(instrumentId)
    if (instrument) {
      // wsConnect?.subscribeMarketData(instrument.name) // Отправляем запрос на подписку серверу
      setInstrumentList(prev => {
        const filteredPrev = prev.find(i => i.id === instrumentId)
        if (!filteredPrev) {
          return [...prev, instrument]
        }
        return prev
      })
    }
  }, [])

  const deleteTicker = useCallback((id: number) => {
    // wsConnect?.unsubscribeMarketData('some-subscription-id') // Отправляем запрос на прекращение подписки серверу
    setInstrumentList(prev => prev.filter(i => i.id !== id))
  }, [])

  return (
    <>
      <main className="home">
        <section className="home-user">
          <UserSection />
        </section>
        <section className="home-tickers">
          <button
            className="ticker-add"
            onClick={() => setIsOpenTickerModalWindow(true)}>
            Добавить тикер
          </button>
          <h2>Список тикеров</h2>
          <div className="ticker-list">
            {instrumentList.map(instrument => (
              <Ticker
                key={instrument.id}
                instrument={instrument}
                deleteTicker={deleteTicker}
                setIsOpenTickerModalWindow={setIsOpenTickerModalWindow}
                wsConnect={wsConnect}
              />
            ))}
          </div>
        </section>
      </main>
      {isOpenTickerModalWindow && (
        <TickerModalWindow
          setIsOpenTickerModalWindow={setIsOpenTickerModalWindow}
          selectTicker={addTicker}
        />
      )}
    </>
  )
}
