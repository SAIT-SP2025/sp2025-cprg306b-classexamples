import { addDoc, collection } from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function dbAddBlogPost(userId, blogPostObj){
    try {
        const newBlogPostReference = collection(db, "users", userId, "blog-posts");
        const newBlogPostSnapshot = await addDoc(newBlogPostReference, blogPostObj);
        console.log(newBlogPostSnapshot.id);
    } catch (error) {
        console.log(error);
    }
}