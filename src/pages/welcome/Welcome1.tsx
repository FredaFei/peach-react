import * as React from 'react'
export const Welcome1: React.FC = () => {
  return (
    <div flex justify-center items-center
      after="content-[hi] b-1 b-red"
      before="content-[hi] b-1 b-red"
      shadow
    >
      <header hover:bg-red w-100px h-40px b-1 b-green-500></header>
      <main grow-1 b-1 b-blue h-100px></main>
      <footer w-200px b-4 b-black h-55px></footer>
    </div>
  )
}
