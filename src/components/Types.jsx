import React from 'react'

export default function Types() {
  return (
    <div className='max-w-5xl mx-auto my-5 px-3'>
    <h1 className='font-semibold text-3xl'>Types</h1>
     <p className='my-2'>Following are the nine types of commits.</p>
     <ul className='list-disc px-6'>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">✨ feat</span> to be used for a new feature</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">🐛 fix</span> to be used for bug fixes</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">💥 break</span> to be used for breaking changes</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">♻️ ref</span> to be used for making code/folder refactor</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">🧪 test</span> to be used for writing test cases</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">🔖 ver</span> to be used for version changes</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">📝 docs</span> to be used for documentation</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">🎨 style</span> to be used for CSS changes</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">🛠 config</span> for configuration, and dependencies changes</li>
        <li> <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">📦 misc</span> to be used for others</li>
     </ul>
    <h1 className='font-semibold text-3xl my-3'>Installation</h1>
    <p className='bg-yellow-400 text-xl py-2 px-4 rounded-sm border border-b-4 border-b-yellow-500 my-2 cursor-text'>npm install -g minimalcommit</p>
    </div>
  )
}

