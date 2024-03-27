import './styles/global.css'
import { CalcularQtdGeracaoKwh } from './components/CalcularQtdGeracaoKwh'
import { CalcularQtdPlaca } from './components/CalcularQtdPlaca'

export function App() {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <CalcularQtdGeracaoKwh />
        <CalcularQtdPlaca />
      </div>
    </div>
  )
}
