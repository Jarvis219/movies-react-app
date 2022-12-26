import { createContext, useContext, useState } from 'react'
import { ELayout } from '~/types/movies'

interface ILayoutContext {
  layout: ELayout
  handleToggle: (checked: boolean) => void
}

const initialState: ILayoutContext = {
  layout: ELayout.Grid,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleToggle: () => {},
}

const LayoutContext = createContext<ILayoutContext>(initialState)

const LayoutProvider = ({ children }: { children: JSX.Element }) => {
  const [layout, setLayout] = useState(ELayout.Grid)

  const handleToggle = (checked: boolean) => {
    setLayout(checked ? ELayout.Grid : ELayout.List)
  }
  return <LayoutContext.Provider value={{ layout, handleToggle }}>{children}</LayoutContext.Provider>
}

export default LayoutProvider

export function useLayoutContext(): ILayoutContext {
  const context = useContext(LayoutContext)

  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider')
  }

  return context
}
