import { supabase } from '../index'

export const InsertarUsuarios = async (p) => {
    try {
        console.log("Insertando usuario 1:", p)
        const { data } = await supabase.from("usuarios").insert(p).select("*");
        //const { data, error } = await supabase.from("usuarios").insert(p);

        return data;
    } catch (error) {
        console.log("Error", error);
    }
}