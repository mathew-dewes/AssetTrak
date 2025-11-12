"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs(){
      const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
    const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;
    const label = decodeURIComponent(segment).replace(/-/g, " ");

    return { href, label, isLast };
  });


  
    

return <nav className="flex mx-3 md:mx-5 xl:mx-10 mt-5" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <Link 
      href="/" 
      className={`inline-flex items-center text-sm font-medium  text-gray-400 hover:text-violet-500
      ${pathname == '/' ? "text-violet-500 font-semibold" : ""}`}>
        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </Link>
    </li>
    
        {crumbs.map((crumb) => (
          <li key={crumb.href} aria-current={crumb.isLast ? "page" : undefined}>
            <div className="flex items-center">
              <svg
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
              </svg>

              {crumb.isLast ? (
                <span className="ms-1 text-sm font-semibold md:ms-2 text-violet-500 capitalize">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="ms-1 text-sm font-medium md:ms-2 text-gray-400 hover:text-violet-500 capitalize"
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