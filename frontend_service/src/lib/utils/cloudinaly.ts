import axios from 'axios';

export interface IResponse {
    success: boolean,
    fileUrl?: string,
    error?: string
}

const upload = async (file: File): Promise<IResponse> => {
    const UPLOAD_PRESET: string = (process.env.NEXT_PUBLIC_CLOUDINARY_UNSIGNED_UPLOAD_PRESET as string);
    const CLOUDINARY_NAME: string = (process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME as string);
    const CLOUDINARY_API_KEY: string = (process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string);
    const CLOUDINARY_SECRET: string = (process.env.NEXT_PUBLIC_CLOUDINARY_SECRET as string);
    const CLOUDINARY_IMAGES_FOLDER: string = (process.env.NEXT_PUBLIC_CLOUDINARY_IMAGES_FOLDER as string);
    let response: IResponse = {} as IResponse;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", `codeinfuse, medium, gist`);
    formData.append("upload_preset", UPLOAD_PRESET); // Replace the preset name with your own
    formData.append("api_key", CLOUDINARY_API_KEY); // Replace API key with your own Cloudinary key
    formData.append("timestamp", (new Date().toDateString()));
    formData.append("folder", CLOUDINARY_IMAGES_FOLDER);
    try {
        // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
        const apiResponse: any = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`, formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
        }).then(response => {
            const data = response.data;
            const fileURL = data.secure_url // You should store this URL for future references in your app
            return data;
        });
        if (!apiResponse.asset_id) return response = { success: false, error: 'Failed to upload image' }
        response = { success: true, fileUrl: apiResponse.secure_url };
    }
    catch (e: any) {
        return response = { success: false, error: e.message || "Failed to upload image" };
    }
    return response;
}

export const cloudinaryService = { upload };