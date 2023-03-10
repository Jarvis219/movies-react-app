import clsx from 'clsx'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={clsx(styles['container'])}>
      <div className={clsx(styles['loader'])}>
        <div className={clsx(styles['outer'])}></div>
        <div className={clsx(styles['middle'])}></div>
        <div className={clsx(styles['inner'])}></div>
      </div>
    </div>
  )
}

export default Loading
