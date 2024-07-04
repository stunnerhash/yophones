'use server'
import db from "@/db"
import { Deal } from "@prisma/client";

export async function uploadCsvChunk(chunk:Deal[]) {
  try {
    // await db.deal.createMany({
    //   data: chunk,
    //   skipDuplicates: true, // Optional: skip duplicate entries
    // });

    return { success: true, message: 'Chunk processed successfully' };
  } catch (error) {
    console.error('Error processing chunk:', error);
    return { success: false, message: 'Error processing chunk' };
  }
}
