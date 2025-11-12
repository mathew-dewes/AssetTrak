"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function AssetPagination({ currentPage, totalPages }: {
currentPage?: number | null, totalPages: number
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

    const changePage = (page: number) =>{
    if (page < 1 || page > totalPages) return;
       const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
        
    }

  const pages = () => {
    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <li key={i}>
          <button onClick={()=> changePage(i)}
            className={`flex items-center justify-center px-3 h-8 leading-tight  border border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white
      ${Number(currentPage) === i ? "bg-gray-700 text-white" : "bg-gray-800"}`}>{i}</button>
        </li>
      )

    }

    return pageItems;
  }
  return (
    <nav className="mt-5">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button onClick={() => changePage(Number(currentPage) - 1)}
          className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0  rounded-s-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white
          ${currentPage == 1 ? "pointer-events-none": ""}`}>
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </button>
        </li>
        {pages()}
        <li>
          <button 
        onClick={() => changePage(Number(currentPage) + 1)}
          className={`flex items-center justify-center px-3 h-8 leading-tight border  rounded-e-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white
            ${totalPages == currentPage ? "pointer-events-none" : ""}`
          
          }>
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>


  )
}