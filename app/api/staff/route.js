import { NextResponse } from "next/server";

export async function POST(request) {
    try {

        const {
            name
            , password
            , email
            , physicalAddress
            , NIN
            , DOB
            , notes
            , isActive } = await request.json();
        const newStaff = {
            name
            , password
            , email
            , physicalAddress
            , NIN
            , DOB
            , notes
            , isActive
        };
        console.log(newStaff)
        return NextResponse.json(newStaff)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            massage: "Failed to create  Staff",
            error
        }, { status: 500 })
    }
}