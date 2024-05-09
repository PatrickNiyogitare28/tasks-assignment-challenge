import axiosInstance from "@/lib/axios";
import { Profile } from "@/types/profile";
import { useState, useEffect } from "react";

export default function useGetAssignees() {
    const [assignees, setAssignees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAssigneesOptions = async () => {
            try {
                const response = await axiosInstance.get('/profile');
                const profiles = response.data.data.profiles;
                const options = profiles.map((profile: Profile) => ({
                    label: profile.fullName,
                    value: profile.id
                }));
                setAssignees(options);
                setLoading(false);
            } catch (error:any) {
                setError(error.message);
                setLoading(false);
            }
        };

        getAssigneesOptions();
    }, []);

    return { assignees, loading, error };
}
