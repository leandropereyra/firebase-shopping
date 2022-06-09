//Crearemos toda la lógica de BBDD para las tasks
import { async } from "@firebase/util";
import { collection, addDoc, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from ".";

//CRUD Create, Read, UpDate and Delete
export const addNewTask = async (task) => {
  await addDoc(collection(db, "tasks"), task);
};

export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  // console.log(querySnapshot);

  // Permite visualizar en consola TODOS los datos de Collection Tasks:

  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, "=>", doc.data());
  //   });

  //Hace un mapeo de tasks dentro de una constante que se devuelve (retunr tasks)
  const tasks = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  //   console.log(tasks)
  return tasks;
};

export const updateTask = async (task) => {
  await setDoc(doc(db, "tasks", task.id), {
    title: task.title,
    description: task.description,
  });
};

export const deleteTask = async (id) =>{
    await deleteDoc(doc(db, 'tasks', id))
}
