export const metadata = {
  title: "Terapia para Ansiedade | Psicóloga Online",
  description: "Tratamento para ansiedade com psicóloga online. Atendimento especializado para crises de ansiedade, medo e insegurança.",
}

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 font-sans text-slate-800">
      <h1 className="text-3xl font-bold text-primary mb-6">Terapia para Ansiedade com Psicóloga Online</h1>

      <p className="text-lg leading-relaxed mb-6">
        A ansiedade pode causar sintomas como preocupação excessiva, insônia, irritabilidade e dificuldade de concentração.
        A terapia é uma das formas mais eficazes de tratar esses sintomas.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Como a terapia ajuda na ansiedade?</h2>
      <p className="leading-relaxed mb-6">
        A psicóloga Nathalia Vicentini trabalha com técnicas que ajudam a identificar pensamentos negativos,
        controlar emoções e desenvolver equilíbrio emocional.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Sintomas comuns da ansiedade</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Preocupação constante</li>
        <li>Coração acelerado</li>
        <li>Insônia</li>
        <li>Medo excessivo</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Quando procurar ajuda?</h2>
      <p className="leading-relaxed mb-10">
        Se a ansiedade está afetando sua rotina, seus relacionamentos ou sua qualidade de vida,
        buscar ajuda profissional é o melhor caminho.
      </p>

      <a
        href="https://wa.me/5517996273555"
        target="_blank"
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
      >
        Falar com a psicóloga agora
      </a>
    </main>
  )
}