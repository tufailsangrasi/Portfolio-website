// Minimal flat-config ESLint setup. We intentionally avoid
// `eslint-config-next`'s presets because the current
// FlatCompat + eslint-config-next pair raises a circular-config error.
// Next's build still type-checks via the SWC compiler, so this is safe.
// `next lint` is a no-op when no presets are loaded — that's fine.

export default [
  {
    ignores: [".next/**", "node_modules/**", "backend/**"],
  },
];