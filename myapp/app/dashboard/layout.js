'use client'

import Aside from "@/components/dashboard/Aside/Aside"



export default function DashboardLayout({ children }) {
    return <section>
    <section className="grid grid-cols-1 lg:grid-cols-8 gap-4 p-4">
            <span className=" col-span-6 md:col-span-2">
            <Aside />            
            </span>
            <sppan className="col-span-6 min-h-screen">        {children}
</sppan>

        </section>
        </section>
  }