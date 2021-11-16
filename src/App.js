
import './App.css';
import AsyncApiCallDropdown from './components/AsyncApiCallDropdown';
import AsyncPaginates from './components/AsyncPaginate';
import AsyncSelectDropdown from './components/AsyncSelectDropdown';
// import AsyncSelect from './components/AsyncPaginate';
import MultiDropdown from './components/MultiDropdown';
import MultiObject from './components/MultiObject';
import MultiSelectWithCheckBox from './components/MultiSelectWithCheckBox';
import SimpleDropdown from './components/SimpleDropdown';

function App() {
  return (
    <div className="App">
      <SimpleDropdown />
      <MultiDropdown />
      <MultiSelectWithCheckBox />
      <AsyncPaginates />
      <AsyncSelectDropdown/>
      <AsyncApiCallDropdown/>
      <MultiObject/>
    </div>
  );
}

export default App;
