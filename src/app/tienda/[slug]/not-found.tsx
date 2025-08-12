import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Producto no encontrado</h2>
          <p className="text-gray-600 mb-8">
            Lo sentimos, el producto que buscas no existe o ha sido removido.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/tienda"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a productos
          </Link>
          
          <div>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
