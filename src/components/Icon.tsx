import c from 'classnames'

interface Props{
    className?: string
    name: string
    onClick: (e: React.MouseEvent) => void
}
export const Icon: React.FC<Props> = ({name, className, onClick}) => {
  return (
      <svg className={c('c-icon', className)} onClick={onClick}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
  )
}
  