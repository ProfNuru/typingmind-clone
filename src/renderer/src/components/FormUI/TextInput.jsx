const TextInput = ({ css, placeholder, value, onChange }) => {
  return (
    <input
      style={{
        borderRadius: '5px',
        padding: '5px',
        fontSize: '1em',
        ...css
      }}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default TextInput
