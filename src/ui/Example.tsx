import reactLogo from "./svg/react.svg"

import cssInline from "./css/example.module.css?inline"
import css from "./css/example.module.css"

function Example() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <style>{cssInline}</style>
      <img src={reactLogo} onClick={() => setCount((count: number) => count + 1)} className={`${css.logo}`} alt="React logo" />
      <p>
        You've clicked on the react logo {count} times
      </p>
    </>
  )
}

export default Example
