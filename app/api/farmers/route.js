import { NextResponse } from "next/server";

export async function POST(request){
    try{
        const {name,phone,email,physicalAddress,contactperson,terms,notes    }= await request.json();
        const newFarmers ={name,phone,email,physicalAddress,contactperson,terms,notes};
        console.log(newFarmers)
        return NextResponse.json(newFarmers)
    }catch(error){
        console.log(error)
        return NextResponse.json({
            massage:"Failed to create  Farmers",
            error
        },{status:500})
    }
}