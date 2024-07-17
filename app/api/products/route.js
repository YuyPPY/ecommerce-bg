import { NextResponse } from "next/server";

export async function POST(request){
    try{
        // -id =>auto ()
        // -title
        // -description
        // -image/images
        // -slug => auto ()
        // -barcode
        // -sku
        // -productsPrice
        // -saslePrice
        // -farmer
        // -category
        // -tags[]
        const {title,description,slug,sku,barcode,productPrice,salePrice,category,Farmer    }= await request.json();
        const newMarkets ={title,description,slug,sku,barcode,productPrice,salePrice,category,Farmer};
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