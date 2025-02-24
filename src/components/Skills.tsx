'use client'

import React from 'react'
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'

const list1 = [
  {
    title: 'JavaScript',
  },
  {
    title: 'TypeScript',
  },
  {
    title: 'React',
  },
  {
    title: 'Next.js',
  },
  {
    title: 'Gatsby',
  },
  {
    title: 'Three.js',
  },
  {
    title: 'GraphQL',
  },
]

const list2 = [
  {
    title: 'Node.js',
  },
  {
    title: 'Express',
  },
  {
    title: 'Nest.js',
  },
  {
    title: 'Tailwind',
  },
  {
    title: 'Socket.io',
  },
]

export function Skills() {
  return (
    <div
      dir="ltr"
      className="w-full relative rounded-md flex flex-col antialiased items-center justify-center overflow-hidden bottom-0 left-0 -z-10"
    >
      <InfiniteMovingCards items={list1} direction="right" speed="normal" pauseOnHover={false} />
      <InfiniteMovingCards items={list2} direction="left" speed="normal" pauseOnHover={false} />
    </div>
  )
}
