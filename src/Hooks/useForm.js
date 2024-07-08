import React, { useState } from 'react'
import { toast } from 'react-toastify';

const handleChange = ({ e, form, setForm, images, setImages }) => {
    let { checked, name, value, files } = e.target;
    // if (name === 'status') {
    //     value = checked ? 'active' : 'inactive';
    // }
    if (name === 'images') {
        setImages((prevImages) => [...prevImages, ...files]);
        return;
    }
    setForm({ ...form, [name]: value });
};


const useForm = () => {
    const [form, setForm] = useState({});
    const [images, setImages] = useState([]);

    return {
        form,
        handleChange: (e) => handleChange({ e, form, setForm, images, setImages }),
        setForm,
        images,
        setImages,
    }
}

export default useForm