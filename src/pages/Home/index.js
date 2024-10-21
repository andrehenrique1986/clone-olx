import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Page = () => {
    return (
       <div>
       <h1>Página inicial</h1> 

       <Link to='/sobre'>Sobre</Link>
       </div>
    )
}

export default Page;