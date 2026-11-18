import './index.css'

const LanguageItem = props => {
  const {languageDetails, isActive, onChangeLanguage} = props
  const {id, buttonText} = languageDetails

  const buttonClassName = isActive
    ? 'language-button active-button'
    : 'language-button'

  const onClickLanguage = () => {
    onChangeLanguage(id)
  }

  return (
    <li className="language-item">
      <button
        type="button"
        className={buttonClassName}
        onClick={onClickLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageItem
