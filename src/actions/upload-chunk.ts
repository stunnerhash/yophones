'use server'
import db from "@/db"
import { Colour, Deal, Phone } from "@prisma/client";

enum Table {
  Deal = 'Deal',
  Phone = 'Phone',
  Colour = 'Colour',
}
enum Action {
  Append = 'Append',
  Replace = 'Replace',
}
type Chunk<T extends Table> =
  T extends Table.Deal ? Deal[]
  : T extends Table.Phone ? Phone[]
  : T extends Table.Colour ? Colour[]
  : never

export async function uploadChunk<T extends Table>({
  chunk,
  table,
  action
}: {
  chunk: Chunk<T>,
  table: T,
  action: Action
  currentRow: number
}) {
  try {
    switch (table) {
      case Table.Deal:
        await db.deal.createMany({
          data: chunk as Deal[],
          skipDuplicates: action === Action.Append,
        });
        break;
      case Table.Phone:
        await db.phone.createMany({
          data: chunk as Phone[],
          skipDuplicates: action === Action.Append,
        });
        break;
      case Table.Colour:
        await db.colour.createMany({
          data: chunk as Colour[],
          skipDuplicates: action === Action.Append,
        });
        break;
      default:
        throw new Error('Invalid table name');
    }
    return { success: true, message: 'Chunk processed successfully' };
  } catch (error) {
    console.error('Error processing chunk:', error);
    return { success: false, message: 'Error processing chunk' };
  }
}
