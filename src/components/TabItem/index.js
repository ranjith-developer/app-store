// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, filterCategoryApp} = props
  const {displayText, tabId} = eachTab

  const onAppFilter = () => {
    filterCategoryApp(tabId)
  }

  return (
    <li>
      <button className="btn-style" type="button" onClick={onAppFilter}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
