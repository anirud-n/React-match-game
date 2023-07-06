import './index.css'

const TabItem = props => {
  const {eachObj, selectedTabId, changeTab} = props
  const {tabId, displayText} = eachObj
  const tabStyle = tabId === selectedTabId ? 'selected-tab' : 'unselected-tab'
  const onClickingTab = () => {
    changeTab(tabId)
  }
  return (
    <li>
      <button className={tabStyle} onClick={onClickingTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
