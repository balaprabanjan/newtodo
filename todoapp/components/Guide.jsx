import React from 'react';

const Guide = () => {
  return (
    <>
      <div className="mt-40 bg-black flex flex-wrap gap-10 md:flex-col items-center container mx-auto rounded-lg shadow-white shadow-md">
        <div>
          <p className="font-extrabold text-gray-400 text-3xl">Steps to guide through Checkito</p>
        </div>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/step1.png" alt="Step 1: Click on the top right corner button" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Step-1</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-black">Click on the top right corner button which directs you to To-do list page.</p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/step3.png" alt="Step 2: Click on the placeholder to type your list" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Step-2</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-black">Click on the placeholder to place the cursor on that then type your list.</p>
          </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/step3.png" alt="Step 3: Check and uncheck the list" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Step-3</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-black">After adding all the lists then you can able to check and uncheck the list.</p>
          </div>
        </a>
        <a href="#" className="flex flex-col mb-20 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/step4.png" alt="Step 4: Delete the task by clicking the 'x' icon" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Step-4</h5>
            <p className="mb-3 font-normal text-gray-700 dark:dark:text-black">Once a task is done, you can delete the task by clicking the 'x' icon.</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Guide;