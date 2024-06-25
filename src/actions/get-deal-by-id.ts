'use server'
import db from "@/db"
export async function getDealById({dealId}:{dealId: number}){
  try{
    const deal = await db.deal.findUnique({
      where:{
        id: dealId
      }
    }) 
    return deal;
  }catch(error){
    console.log("Error fetching deal by id", error)
  }
}
