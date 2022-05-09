export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div
      style={{
        background: '#EBF2F5',
        padding: '16px',
        borderRadius: '10px',
      }}
    >
      {Story()}
    </div>
  ),
]
