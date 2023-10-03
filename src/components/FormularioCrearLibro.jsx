import React from "react";
import { useForm } from "react-hook-form";

const FormularioCrearLibro = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" id="titulo" {...register("titulo", { required: true})} />
                {errors.titulo && <p>Este campo es requerido</p>}
            </div>
            <div>
                <label htmlFor="Autor">Autor</label>
                <input type="text" id="Autor" {...register("autor", { required: true})} />
                {errors.autor && <p>Este campo es requerido</p>}
            </div>
            <div>
                <label htmlFor="Precio">Precio</label>
                <input type="number" id="Precio" {...register("precio", { required: true})} />
                {errors.precio && <p>Este campo es requerido</p>}
            </div>
            <div>
                <label htmlFor="Sinopsis">Sinopsis</label>
                <input type="text" id="Sinopsis" {...register("sinopsis", { required: true})} />
                {errors.sinopsis && <p>Este campo es requerido</p>}
            </div>
            <div>
                <label htmlFor="Categoria">Categoria</label>
                <input type="text" id="Categoria" {...register("categoria", { required: true})} />
                {errors.categoria && <p>Este campo es requerido</p>}
            </div>
            <button type="submit">Crear Libro</button>
        </form>
        </>
    )
}

export default FormularioCrearLibro;