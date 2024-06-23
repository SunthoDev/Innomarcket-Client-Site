import React from 'react'
import './adminHome.css'
const AdminHome = () => {
  return (
    <section>
        
    <div id="main" class="main-content flex-1  mt-0 md:mt-0 pb-24 md:pb-5">

        <div class="pt-0">
            <div class="bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                <h1 class="font-bold pl-2">Analytics</h1>
            </div>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                 
                <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-green-600"><i class="fa fa-check-square text-white" aria-hidden="true"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Total Order</h2>
                           <p class="font-bold text-3xl">$3249 <span class="text-green-500"> </span></p>
                        </div>
                    </div>
                </div>
                 
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                 
                <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-pink-600"><i class="fa fa-user-circle-o text-white" aria-hidden="true"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Total Users</h2>
                            <p class="font-bold text-3xl">249 <span class="text-pink-500"><i class="fas fa-exchange-alt"></i></span></p>
                        </div>
                    </div>
                </div>
                 
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                 
                <div class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-yellow-600"><i class="fa fa-user-plus text-white" aria-hidden="true"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">New Users</h2>
                            <p class="font-bold text-3xl">2 <span class="text-yellow-600"> </span></p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                
                <div class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-blue-600"><i class="fa fa-university text-white" aria-hidden="true"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">No of Order</h2>
                            <p class="font-bold text-3xl">152 days</p>
                        </div>
                    </div>
                </div>
             
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              
                <div class="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-indigo-600"><i class="fa fa-list-ol text-white" aria-hidden="true"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">To Do List</h2>
                            <p class="font-bold text-3xl">7 tasks</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-6">
              
                <div class="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                        <div class="flex-shrink pr-4">
                            <div class="rounded-full p-5 bg-red-600"><i class="fa fa-info-circle text-white" aria-hidden="true"></i></div>
                        </div>
                        <div class="flex-1 text-right md:text-center">
                            <h2 class="font-bold uppercase text-gray-600">Issues</h2>
                            <p class="font-bold text-3xl">3 <span class="text-red-500"> </span></p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
     </div>

    </section>
  )
}

export default AdminHome