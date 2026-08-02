import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export interface TransactionData {
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'expense' | 'income'; // для розрізнення витрат/доходів
}

export const addTransactionToDb = async (transaction: TransactionData) => {
  try {
    // Отримуємо посилання на колекцію "transactions"
    const docRef = await addDoc(collection(db, "transactions"), {
      ...transaction,
      createdAt: serverTimestamp(), // зручно додавати timestamp створення запису
    });
    
    console.log("Документ успішно додано з ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Помилка при додаванні транзакції в Firebase: ", error);
    throw error;
  }
};