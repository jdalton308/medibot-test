
export function onInputChange(e) {
  this.setState({[e.target.name]: e.target.value});
}