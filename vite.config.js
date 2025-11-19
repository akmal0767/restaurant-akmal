// Re-export the ESM config in `vite.config.mjs` so Vite's CJS loader
// can load the ESM config without trying to require ESM-only packages.
module.exports = async () => {
  const mod = await import('./vite.config.mjs')
  const exported = mod.default
  if (typeof exported === 'function') {
    return await exported()
  }
  return exported
}
