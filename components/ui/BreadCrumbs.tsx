"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs(){
      const pathname = usePathname();
      if ( pathname.startsWith('/auth') || pathname === '/' ) return
  const segments = pathname.split("/").filter(Boolean);
    const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;
    const label = decodeURIComponent(segment).replace(/-/g, " ");

    return { href, label, isLast };
  });


  
    

return <nav className="flex mx-3 md:mx-5 xl:mx-10 mt-5" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">


    
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} aria-current={crumb.isLast ? "page" : undefined}>
            <div className="flex items-center">
              {(i == 1) && <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>}
    

              {crumb.isLast ? (
                <span className="ms-1 text-sm font-semibold md:ms-2 text-violet-500 uppercase">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="ms-1 text-sm font-medium md:ms-2 text-gray-400 hover:text-violet-500 uppercase"
                >
                  {crumb.label}
                </Link>
              )}
            </div>
          </li>
        ))}

  </ol>
</nav>

}