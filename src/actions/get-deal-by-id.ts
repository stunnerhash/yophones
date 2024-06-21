import db from "@/db"
export function getDealById({dealId}:{dealId: number}){
  try{
    const deal = db.deal.findUnique({
      where:{
        id: dealId
      }
    }) 
    return deal;
  }catch(error){
    console.log("Error fetching deal by id", error)
  }
}
