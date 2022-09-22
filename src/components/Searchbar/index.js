import SearchBar from './SearchBar'
import SearchBarButton from './SearchButton'
import SearchBarCleanButton from './SearchClearButton'
import SearchBarInput from './SearchInput'
import SearchBarResult from './SearchResult'
import SearchBarResults from './SearchResults'

const all = SearchBar
all.Input = SearchBarInput
all.SearchButton = SearchBarButton
all.ClearButton = SearchBarCleanButton
all.Results = SearchBarResults
all.Result = SearchBarResult

export default all
