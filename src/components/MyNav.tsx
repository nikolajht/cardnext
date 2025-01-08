import stylenav from "@/components/mynav.module.scss"
import Link from 'next/link';

interface enemies{

    name:string

}

const MyNav = () => {

    const enemiesArray:enemies[] = [

        {name:"Angel"},
        {name:"Devil"},
        {name:"Girl"}

    ]

    return(
        <nav id={stylenav.menuContainer}>
            <ul>
                
                {enemiesArray.map( (item:enemies, index:number)=>(
                    
                    <li key={index}>
                        <Link 
                            href={{
                                pathname:'/enemies',
                                query:{id:index}
                            }}>

                            {item.name}
                        </Link>
                    </li>

                ))}

            </ul>
        </nav>
    )
}

export default MyNav;