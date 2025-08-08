"use server"
import { IPrediction } from "@/interfaces/form.interfaces";
import { unstable_noStore as noStore } from "next/cache";

export const createPrediction = async (formData: FormData): Promise<IPrediction> => {
    
    noStore();

    const imageUrl = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload?upload_preset=${process.env.CLOUDINARY_PRESET}&folder=${process.env.CLOUDINARY_FOLDER}`,
        {
            method: "PUT",
            body: formData.get('imageFile') as File
        }
    )
    .then((res) => res.json() as Promise<{secure_url:string}>)
    .then(({ secure_url }) => secure_url)

    const prediction = await fetch("https://replicate.com/api/predictions", {
        headers: {
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.6",
            "content-type": "application/json",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-csrftoken": "qK0BYyu8uM1vFyt3MUB2dVn8smUPzI"
        },
        referrer: "https://replicate.com/jagilley/controlnet-hough",
        referrerPolicy: "same-origin",
        body: JSON.stringify({
            input: {
                eta: 0,
                image: imageUrl,
                scale: 9,
                prompt: formData.get("prompt") as string,
                a_prompt: "best quality, extremely detailed, 4k, octane render, sharp, bloom, daylight",
                n_prompt: "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, blurry, ",
                ddim_steps: 20,
                num_samples: "1",
                value_threshold: 0.1,
                image_resolution: "512",
                detect_resolution: 512,
                distance_threshold: 0.1,
            },
            is_training: false,
            create_model: "0",
            stream: false,
            version: "854c8727697a057c525cdb45ab837f64ecca770a1769cc52287c2e56472a247b",
        }),
        method: "POST",
        mode: "cors",
        credentials: "include",
    }).then((res) => res.json() as Promise<IPrediction>);

    return prediction;
};

export const getPrediction = async (id: string) => {

    noStore();

    return fetch("https://replicate.com/api/predictions/" + id, {
        headers: {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.6",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Brave\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1"
        },
        referrer: "https://replicate.com/jagilley/controlnet-hough",
        referrerPolicy: "same-origin",
        body: null,
        mode: "cors",
        credentials: "include",
        method: "GET",
    }).then((res) => res.json() as Promise<IPrediction>);;
}