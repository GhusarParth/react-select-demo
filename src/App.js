import './App.css';
import MultiDropdown from './components/MultiDropdown';
import MultiSelectWithCheckBox from './components/MultiSelectWithCheckBox';
import SimpleDropdown from './components/SimpleDropdown';

function App() {
  return (
    <div className="App">
      <SimpleDropdown/>
      <MultiDropdown/>
      <MultiSelectWithCheckBox/>
    </div>
  );
}

export default App;
