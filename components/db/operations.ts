import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter
} from "firebase/firestore"
import { firestore } from "../firebase"
import { Bill } from "./types"

const currentGeneralCourt = 192

export async function listBills(
  billLimit = 20,
  startAfterBillNumber?: string
): Promise<Bill[]> {
  let q = query(
    collection(firestore, `/generalCourts/${currentGeneralCourt}/documents`),
    orderBy("BillNumber"),
    limit(billLimit)
  )
  if (startAfterBillNumber) {
    q = query(q, startAfter(startAfterBillNumber))
  }
  const result = await getDocs(q)
  return result.docs.map(d => d.data()) as any
}

export async function getBill(id: string): Promise<Bill> {
  const bill = await getDoc(
    doc(firestore, `/generalCourts/${currentGeneralCourt}/documents/${id}`)
  )
  return bill.data() as any
}