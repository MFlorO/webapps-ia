import { NEXT_PUBLIC_BASE_URL_BACKEND } from "../../env"


export const chatWithGemini = async( prompt:string ) => {

    try {

        const result = await fetch(`${NEXT_PUBLIC_BASE_URL_BACKEND}/chatbot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        })
        
        const response = await result.json();

        return{
            ok: true,
            data: response,
            error: null
        }
        

    } catch (error) {
        return {
            ok: false,
            data: null,
            error: error
        }
    }
}