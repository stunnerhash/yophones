import db from "@/db"
import { Analytics } from "@prisma/client";

export async function POST(req: Request){
  try{
    const body:Analytics = await req.json()
    const response = await db.analytics.create({
      data:{
        userAgent: body.userAgent,
        platform: body.platform,
        screenResolution: body.screenResolution,
        latitude: body.latitude,
        longitude: body.longitude,
        dealName: body.dealName,
        network: body.network,
        href: body.href 
      }
    })
    return new Response(JSON.stringify(response), {
      status:200,
    });
  }catch(error){
    console.error("Error saving analytics", error);
    const response = { message:"Error saving analytics data" }
    return new Response(JSON.stringify(response), {
      status:400
    })
  }
}

