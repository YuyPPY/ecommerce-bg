import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const {title,slug,logoUrl,description    }= await request.json();
        const newMarkets ={title,slug,logoUrl,description};
        console.log(newMarkets)
        return NextResponse.json(newMarkets)
    }catch(error){
        console.log(error)
        return NextResponse.json({
            massage:"Failed to create  Markets",
            error
        },{status:500})
    }
}