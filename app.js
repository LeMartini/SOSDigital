import { db, collection, addDoc } from './firebase-config.js';

export async function salvarResposta(resposta) {
    try {
        const docRef = await addDoc(collection(db, "usuarios"), resposta);
        console.log("Documento salvo com ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Erro ao salvar resposta:", error);
        throw error;
    }
}