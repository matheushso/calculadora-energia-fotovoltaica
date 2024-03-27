import { Check } from 'phosphor-react'
import { FormEvent, useState } from 'react'

type Placa = {
  quantidadePlaca: number | null;
  potenciaPlaca: number | null;
  radiacaoSolar: number | null;
  percaRadiacao: number | null;
  sobraRadiacao: number | null;
};

export function CalcularQtdGeracaoKwh() {
  const [placa, setPlaca] = useState<Placa>({
    quantidadePlaca: null,
    potenciaPlaca: null,
    radiacaoSolar: null,
    percaRadiacao: null,
    sobraRadiacao: null,
  });
  const [resultadoOriginal, setResultadoOriginal] = useState<string>()
  const [resultadoTransformado, setResultadoTransformado] = useState<number>()

  async function calcularGeracaokWh(event: FormEvent) {
    event.preventDefault()
    
    if (placa.quantidadePlaca != null && placa.potenciaPlaca != null && placa.radiacaoSolar != null && placa.percaRadiacao != null && placa.sobraRadiacao != null) {
      const resultadoCalculado = placa.quantidadePlaca * placa.potenciaPlaca * placa.radiacaoSolar * placa.percaRadiacao * placa.sobraRadiacao;
      const formatter = new Intl.NumberFormat('pt-BR');
      const resultadoFormatado = formatter.format(resultadoCalculado);
      setResultadoOriginal(resultadoFormatado)
      const numeroFormatado = parseFloat(resultadoCalculado.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }));

      console.log(numeroFormatado);

      setResultadoTransformado(numeroFormatado)
      // Ex: placa.quantidadePlaca - 55 * placa.potenciaPlaca - 555 * placa.radiacaoSolar - 30.41 * placa.percaRadiacao 0.8 * placa.sobraRadiacao 5.14
      // Resultado = 3817026,708
      // Considerar tudo menos as centenas e depois da virgula, FICA = 3.817
    }

    setPlaca({
      quantidadePlaca: null,
      potenciaPlaca: null,
      radiacaoSolar: null,
      percaRadiacao: null,
      sobraRadiacao: null,
    });
  }

  return (
    <form onSubmit={calcularGeracaokWh} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Calcular Quantidade de Geração kWh [Informar Placas]
      </label>

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Quantidade de placas
      </label>
      <input
        type="number"
        id="title"
        placeholder="Informe a quantidade de placas"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        autoFocus
        value={placa.quantidadePlaca === null ? '' : placa.quantidadePlaca}
        onChange={(event) => setPlaca({ ...placa, quantidadePlaca: parseFloat(event.target.value) })}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Potência das placas
      </label>
      <input
        type="number"
        id="title"
        placeholder="Informe a potência das placas"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        autoFocus
        value={placa.potenciaPlaca === null ? '' : placa.potenciaPlaca}
        onChange={(event) => setPlaca({ ...placa, potenciaPlaca: parseFloat(event.target.value) })}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Radiação solar
      </label>
      <input
        type="number"
        id="title"
        placeholder="Informe a radiação solar"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        autoFocus
        value={placa.radiacaoSolar === null ? '' : placa.radiacaoSolar}
        onChange={(event) => setPlaca({ ...placa, radiacaoSolar: parseFloat(event.target.value) })}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Perca radiação
      </label>
      <input
        type="number"
        id="title"
        placeholder="Informe a perca de radiação"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        autoFocus
        value={placa.percaRadiacao === null ? '' : placa.percaRadiacao}
        onChange={(event) => setPlaca({ ...placa, percaRadiacao: parseFloat(event.target.value) })}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Sobra radiação
      </label>
      <input
        type="number"
        id="title"
        placeholder="Informe a sobra de radiação"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        autoFocus
        value={placa.sobraRadiacao === null ? '' : placa.sobraRadiacao}
        onChange={(event) => setPlaca({ ...placa, sobraRadiacao: parseFloat(event.target.value) })}
      />

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        <Check size={20} weight="bold" />
        Calcular
      </button>

      <div className="flex items-center gap-3 group">
        <span className="text-white leading-tight">Resultado Original: </span>
        <output className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
          {resultadoOriginal}
        </output>

        <span className="text-white leading-tight">Resultado Formatado: </span>
        <output className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
        {resultadoTransformado}
        </output>
      </div>
    </form>
  )
}
