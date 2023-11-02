import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectTheme, toggleDarkMode } from '../../store/theme/themeSlice'
import * as Switch from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'

import * as styles from './switch.css'

export default function DarkMode(): JSX.Element {
  const darkMode = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  return (
    <form>
      <label data-dark={darkMode} className={styles.label}>
        <Moon className={styles.dark} width={18} />
        <Switch.Root
          onCheckedChange={() => dispatch(toggleDarkMode())}
          className={styles.SwitchRoot}
        >
          <Switch.Thumb className={styles.SwitchThumb} />
        </Switch.Root>
        <Sun className={styles.light} width={18} />
      </label>
    </form>
  )
}
