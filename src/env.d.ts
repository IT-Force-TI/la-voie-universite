/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 'mock' (fake data, par défaut) ou 'api' (backend réel). */
  readonly VITE_DATA_SOURCE?: string
  /** URL de l'API : '/api' (par défaut) ou absolue, ex. https://api.ecole.tg/api */
  readonly VITE_API_URL?: string
  /** Délai simulé des fake data en millisecondes (250 par défaut, 0 pour désactiver). */
  readonly VITE_MOCK_LATENCY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
