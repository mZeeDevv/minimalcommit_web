import React from 'react'

export default function About() {
  return (
    <div className='max-w-7xl mx-auto my-20 px-3'>
    <h1 className='font-semibold text-4xl'>What is Minimal Commit?</h1>
    <p className='text-2xl my-4 leading-10'>Minimal commit is a Node.js based CLI (command line interface) tool that helps you and your team mates to stay consistent with the 
    <span class="bg-gray-200 rounded-md font-mono mx-1 px-1 font-bold">git commit</span>
       messages.
       To commit files using <b>Minimal Commit</b>, you have a list of options to choose from, this list consist type of work you did. This makes things simple
        and less confusing by choosing an option from a list.</p>

        <p className='text-2xl my-4 leading-10'>The list of options is limited to only <b>nine types</b>. This is done on purpose to keep the list as short as possible to avoid confusion. The more options you have, the more confusing it will be
        </p>
    </div>
  )
}
