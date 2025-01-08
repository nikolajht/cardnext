"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import card from "../page.module.scss";
import Image from "next/image"; 
import { useSearchParams } from "next/navigation";
import { EnemyArray } from "@/types/type";

const Page = () => {

    const data: EnemyArray = [
        {
            name:"Angel",
            img:"/assets/Angel.jpg",
            text:"kawaii and seiso. don’t touch her"
            },
           
            {
            name:"Devil",
            img:"/assets/Devil.jpg",
            text:"kawaii and seiso. don’t touch her"
            },
           
            {
            name:"Girl",
            img:"/assets/Girl.jpg",
            text:"kawaii and seiso. don’t touch her"
            }
    ]

    /* A */

    // const searchParams = useSearchParams();
    // const query = searchParams.get('id');

    // const dataID = query as string;

    // const id = parseInt(dataID);


    /* B */

    const searchParams = useSearchParams();
    const query = searchParams.get('id');

    const id = Number(query);



    console.log(id)

    const refObj = useRef<HTMLDivElement>(null);

    useEffect( ()=>{

        gsap.to(refObj.current,{

            duration:0.05,
            scaleX:-1,
            alpha:0,
            repeat:3,
            yoyo:true,
            onComplete: ()=>{
                gsap.to(refObj.current,{
                    
                    duration:0.05,
                    scaleX:1,
                    alpha:1,
                })
            }

        })

    }, [id] )

    return (

        <main>

        <section ref = {refObj} id={card.cardContainer}>
            
            <div id={card.card}>

                <div id={card.headline}>{data[id].name}</div>

                <div id={card.imagecon}>
                    <Image src={data[id].img} alt="Picture" width={250} height={250} />
                </div>

                <div id={card.content}>{data[id].text}</div>

            </div>

        </section>

        </main>
    )
 }

export default Page;