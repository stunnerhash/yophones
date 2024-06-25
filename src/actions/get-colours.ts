'use server'
import db from "@/db"

export async function getColours(){
  try{
    const colours = await db.colour.findMany()
    return colours;
  }catch(error){
    console.error("Error fetching colours", error);
    return []
  }
}
