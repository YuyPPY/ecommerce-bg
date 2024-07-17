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
        const newProducts ={title,description,slug,sku,barcode,productPrice,salePrice,category,Farmer};
        console.log(newProducts)
        return NextResponse.json(newProducts)
    }catch(error){
        console.log(error)
        return NextResponse.json({
            massage:"Failed to create  Products",
            error
        },{status:500})
    }
}