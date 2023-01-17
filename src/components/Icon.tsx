import c from 'classnames'

interface Props{
    className?: string
    name: string
}
export const Icon: React.FC<Props> = ({name,className}) => {
  return (
      <svg className={c('c-icon', className)}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
  )
}
  