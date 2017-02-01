import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
import engines from '../data/engines';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      engine: 10,
      tons: 20
    };
    this.handleEngineChange = this.handleEngineChange.bind(this);
    this.handleTonnageChange = this.handleTonnageChange.bind(this);
    this.formatEngine = this.formatEngine.bind(this);
  }

  handleEngineChange(event, index, value) {
    this.setState({engine: value})
  }

  handleTonnageChange(event, value) {
    this.setState({tons: value })
  }

  formatEngine(engine) {
    return `${engine.rating} - ${engine.manufacturer} - ${engine.tonnage} tons`
  }

  render() {
    const engineList = engines.map(engine => <MenuItem key={engine.rating} value={engine.rating} primaryText={this.formatEngine(engine)}></MenuItem>)
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <h2>{this.state.tons} tons</h2>
          </div>
          <Slider
            min={10}
            max={100}
            step={5}
            value={this.state.tons}
            onChange={this.handleTonnageChange}
          />
          <SelectField
            floatingLabelText="Engines"
            value={this.state.engine}
            onChange={this.handleEngineChange}
          >
          { engineList}
          </SelectField>
        </div>
      </MuiThemeProvider>
    );
  }
}


