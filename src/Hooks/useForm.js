import React, { useState } from 'react'
import { toast } from 'react-toastify';

const handleChange = ({ e, form, setForm }) => {
    let { checked, name, value, files } = e.target;
    // if (name === 'status') {
    //     value = checked ? 'active' : 'inactive';
    // }
    setForm({ ...form, [name]: files ? files : value });
};

// const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm(prevForm => ({
//       ...prevForm,
//       [name]: files ? files[0] : value,
//     }));
//   };


const useForm = () => {
    const [form, setForm] = useState({});

    return {
        form,
        handleChange: (e) => handleChange({ e, form, setForm }),
        setForm
    }
}

export default useForm