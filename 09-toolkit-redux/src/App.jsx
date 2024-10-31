import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment, decrement, incrementBy } from './store/slices/counter/CounterSlice'

function App() {

    const { counter } = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1> count is {counter}</h1>
            <div className="card">
                <button onClick={() => dispatch(increment())}>
                    Increment 
                </button>

                <button onClick={() => dispatch(decrement())}>
                    Decrement 
                </button>

                <button onClick={() => dispatch(incrementBy(5))}>
                    Increment by num 
                </button>

            </div>

        </>
    )
}

export default App
