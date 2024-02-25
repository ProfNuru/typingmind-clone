import './AIOptions.css'
import aiModels from '../../lib/ai-models'

const AIOptions = () => {
  return (
    <ul>
      {aiModels.map((model) => (
        <div key={model.name} className="model-item">
          <span className="icon">
            <model.icon />
          </span>
          <div className="model-detail">
            <h4>{model.name}</h4>
            <p>{model.description}</p>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default AIOptions
