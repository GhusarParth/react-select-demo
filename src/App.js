import './App.css';
import AsyncSelect from './components/AsyncSelect';
import MultiDropdown from './components/MultiDropdown';
import MultiSelectWithCheckBox from './components/MultiSelectWithCheckBox';
import SimpleDropdown from './components/SimpleDropdown';

function App() {
  return (
    <div className="App">
      <SimpleDropdown/>
      <MultiDropdown/>
      <MultiSelectWithCheckBox/>
      <AsyncSelect/>
    </div>
  );
}

export default App;
