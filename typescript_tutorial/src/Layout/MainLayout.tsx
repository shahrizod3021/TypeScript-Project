import React from "react"
import {Outlet} from 'react-router-dom'
import { Navbar } from "../Component/Navbar"
export const MainLayout = () => {
    return(
        <div>
            <div className="mb-5">
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    )
}