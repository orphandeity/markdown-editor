import * as Switch from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'

import * as styles from './switch.css'

interface ThemeProps {
  darkMode: boolean
  onThemeChange: () => void
}

export default function Theme({
  darkMode,
  onThemeChange,
}: ThemeProps): JSX.Element {
  return (
    <form>
      <label data-dark={darkMode} className={styles.label}>
        <Moon className={styles.dark} width={18} />
        <Switch.Root
          onCheckedChange={onThemeChange}
          className={styles.SwitchRoot}
        >
          <Switch.Thumb className={styles.SwitchThumb} />
        </Switch.Root>
        <Sun className={styles.light} width={18} />
      </label>
    </form>
  )
}
