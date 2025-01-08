"use client"; // clientside render

import { useSearchParams } from "next/navigation";

const Page = ()=> {

    const searchParams = useSearchParams();

    const id = searchParams.get('id');

    return(
        <>
            <div>{id}</div>
            <div> more info</div>
        </>
    )
}

export default Page;