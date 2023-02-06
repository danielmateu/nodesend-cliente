import React, { useState } from 'react'

export const Formulario = () => {

    const [password, setPassword] = useState(false);
    return (
        <div className='w-full my-4'>
            <div className='my-4'>
                <label htmlFor="" className='text-gray-600'>Eliminar tras:</label>
                <select name="" id="" className='appereance-none w-full bg-whiteborder  leading-none focus:outline-none p-2 shadow-lg'>
                    <option value="" select disabled>--Seleccione--</option>
                    <option value="1">1 Descargas</option>
                    <option value="5">5 Descargas</option>
                    <option value="10">10 Descargas</option>
                    <option value="20">20 Descargas</option>
                </select>
            </div>

            <div className='mt-4'>
                <div className="flex gap-2">
                    <label htmlFor="" className='text-gray-600 mr-2'>Proteger con contraseña</label>
                    <input type="checkbox"
                    onChange={() => setPassword(!password)} />

                    {
                        password ? (
                            <input type="password" className='appereance-none w-full bg-whiteborder  leading-none focus:outline-none p-2 shadow-lg' />
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}
