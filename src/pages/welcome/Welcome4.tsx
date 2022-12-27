import * as React from 'react'
import p4 from '../../assets/images/welcome4.svg'

export const Welcome4: React.FC = () => {
  return (
    <div text-center>
      <img src={p4} />
      <h2 text-32px mt-48px>云备份 <br />再也不怕数据丢失</h2>
    </div>
  )
}
