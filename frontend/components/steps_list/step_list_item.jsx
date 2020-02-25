import React from 'react'; 


class StepListItem extends React.Component { 
  constructor(props) { 
    super(props)

    this.updateStep = this.updateStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
  }

  removeStep(e) { 
    e.preventDefault(); 
    var step = this.props.step; 
    this.props.removeStep(step);
  }


  updateStep(e) { 
    e.preventDefault(); 
    var old = this.props.step
    var done = this.props.step.done
    var step = Object.assign({}, old, {done: !done});

    this.props.receiveStep(step);
  }

  render() { 
    var title = this.props.step.title; 
    var body = this.props.step.body; 
    var done = this.props.step.done; 

    return (<div>
      <section className="step">
        <li key={this.props.key}>{title}</li>
        <p>{body}</p>
        <button onClick={this.updateStep}>{done ? "undo" : "done"}</button>
        <button onClick={this.removeStep}>delete</button>
      </section>

    </div>)
  }
}

export default StepListItem; 

