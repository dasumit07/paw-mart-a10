import React, { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/Authcontext';
import Loading from '../pages/Loading';

const MyProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [dbUser, setDbUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        document.title = "My Profile | PawMart";
    }, []);
    useEffect(() => {
        if (!user?.email) return;
        setLoading(true);
        fetch(`https://paw-mart-a10-server.vercel.app/users/profile?email=${user.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data));
        setLoading(false);
    }, [user]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const displayName = e.target.name.value;
        const imageFile = e.target.image.files[0];

        let updatedPhotoURL = dbUser.photoURL;


        if (imageFile) {
            const formData = new FormData();
            formData.append('image', imageFile);

            const imgRes = await fetch(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageApiKey}`,
                { method: 'POST', body: formData }
            );

            const imgData = await imgRes.json();
            if (!imgData.success) throw new Error("Image upload failed");

            updatedPhotoURL = imgData.data.display_url;
        }


        await updateUserProfile(displayName, updatedPhotoURL);


        await fetch(
            `https://paw-mart-a10-server.vercel.app/users/profile?email=${user.email}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    displayName,
                    photoURL: updatedPhotoURL
                })
            }
        );


        setDbUser(prev => ({
            ...prev,
            displayName,
            photoURL: updatedPhotoURL
        }));
        setLoading(false);
        setEditMode(false);
        Swal.fire("Success", "Profile updated successfully", "success");
    };


    if (loading || !dbUser) return <Loading></Loading>
    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-xl rounded-2xl animate__animated animate__fadeIn">

            {/* PROFILE VIEW */}
            <div className="flex flex-col items-center gap-4">
                <img
                    src={dbUser?.photoURL}
                    alt="Profile"
                    className="w-28 h-28 rounded-full border-4 border-teal-500 object-cover"
                />

                <h2 className="text-2xl font-bold">{dbUser?.displayName}</h2>

                <p className="font-bold">
                    Email: <span className="text-gray-500">{dbUser?.email}</span>
                </p>
            </div>

            {/* EDIT FORM */}
            <div className="mt-6 space-y-4 text-center">
                {editMode ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            defaultValue={dbUser?.displayName}
                            className="w-full border rounded-lg px-3 py-2"
                            required
                        />

                        <input
                            type="file"
                            name="image"
                            className="file-input file-input-neutral w-full"
                        />

                        <div className="flex justify-center gap-3">
                            <button
                                type="submit"
                                className="btn btn-success"
                            >
                                Save Changes
                            </button>

                            <button
                                type="button"
                                onClick={() => setEditMode(false)}
                                className="btn btn-ghost"
                            >
                                Cancel
                            </button>
                        </div>

                    </form>
                ) : (
                    <button
                        onClick={() => setEditMode(true)}
                        className="btn btn-outline btn-primary hover:scale-105 transition"
                    >
                        Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
