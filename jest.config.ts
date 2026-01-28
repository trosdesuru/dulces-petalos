import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Ubicación de tu app Next.js para cargar next.config.js
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Configuración para ejecutar código antes de cada test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Mapeo de alias (importante para que funcionen los @/)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default createJestConfig(config)