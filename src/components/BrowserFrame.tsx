import * as React from 'react'

// A small fake browser window around a project screenshot
export default function BrowserFrame({
  domain,
  children,
  className = '',
}: {
  domain?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-900/60" dir="ltr">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        {domain && (
          <span className="flex-1 truncate rounded-md bg-white px-2 py-0.5 text-center text-xs leading-5 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            {domain}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}
