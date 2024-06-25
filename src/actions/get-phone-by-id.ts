'use server'
import db from "@/db"

export async function getPhoneById(phoneId: number){
  try{
    const phone = db.phone.findUnique({
      where:{
        id: phoneId,
      }
    })
    return phone;
  }catch(error){
    console.error("Error fetching phone by id", error)
  }
}

