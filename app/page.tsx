export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
          🌿 Zen Respira
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Tu espacio de meditacion y bienestar
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-green-50 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-green-800 mb-2">🧘 Meditacion</h2>
            <p className="text-gray-600">Sesiones guiadas para calmar tu mente</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">💨 Respiracion</h2>
            <p className="text-gray-600">Tecnicas de respiracion consciente</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-purple-800 mb-2">🌙 Descanso</h2>
            <p className="text-gray-600">Mejora tu calidad de sueno</p>
          </div>
        </div>
      </div>
    </main>
  )
}
