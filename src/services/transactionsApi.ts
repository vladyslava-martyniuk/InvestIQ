import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/config";
import type { Transaction } from "../types/types";

export interface TransactionData {
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'expense' | 'income';
}

export const subscribeToTransactions = (
  userId: string,
  onChange: (items: Transaction[]) => void
) => {
  const q = query(
    collection(db, 'users', userId, 'transactions'),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const items: Transaction[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        const amount = Number(data.amount) || 0;

        return {
          id: doc.id,
          date: data.date ?? "",
          description: data.description ?? "",
          category: data.category ?? "",
          type: data.type ?? "expense",
          amount: data.type === "income" ? amount : -amount,
        };
      });

      onChange(items);
    },
    (error) => {
      console.error("Помилка при читанні транзакцій:", error);
    }
  );
};

export const addTransactionToDb = async (userId: string, transaction: TransactionData) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "transactions"), {
      ...transaction,
      createdAt: serverTimestamp(),
    });

    console.log("Документ успішно додано з ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Помилка при додаванні транзакції в Firebase: ", error);
    throw error;
  }
};

export const deleteTransactionFromDb = async (userId: string, id: string) => {
  try {
    await deleteDoc(doc(db, "users", userId, "transactions", id));
  } catch (error) {
    console.error("Помилка при видаленні транзакції:", error);
    throw error;
  }
};