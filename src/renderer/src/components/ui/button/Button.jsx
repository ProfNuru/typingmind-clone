const Button = ({ text, icon, onClick, css }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        justifyContent: 'center',
        borderRadius: '5px',
        border: '0px',
        paddingTop: '8px',
        paddingBottom: '8px',
        ...css
      }}
    >
      {icon} {text}
    </button>
  )
}

export default Button
