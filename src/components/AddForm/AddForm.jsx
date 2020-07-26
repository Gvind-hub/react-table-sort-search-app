import React from 'react';
import {useForm} from "react-hook-form";
import cn from 'classnames';

import './AddForm.scss'

const AddForm = ({handleClosePop, addPopVisible, onSubmitAddForm}) => {
    const {register, handleSubmit, errors, reset} = useForm();

    return (
        <div className={cn("add-form", {"visible": addPopVisible})}>
            <form className="add-form__form" onSubmit={handleSubmit(onSubmitAddForm)}>
                <h2 className="add-form__title">Add User</h2>
                <label className="add-form__label">ID:
                    <input type="number" className="add-form__input" ref={register({required: true})} name="id"/>
                </label>
                {errors.id && <span className="add-form__error">This field is required</span>}
                <label className="add-form__label">First Name:
                    <input type="text" className="add-form__input" ref={register({required: true, minLength: 2})} name="firstName"/>
                </label>
                {errors.firstName && errors.firstName.type === 'required' && <span className="add-form__error">This field is required!</span>}
                {errors.firstName && errors.firstName.type === 'minLength' && <span className="add-form__error">First Name is too short.</span>}
                <label className="add-form__label">Last Name:
                    <input type="text" className="add-form__input" ref={register({required: true, minLength: 2})} name="lastName"/>
                </label>
                {errors.lastName && errors.lastName.type === 'required' && <span className="add-form__error">This field is required</span>}
                {errors.lastName && errors.lastName.type === 'minLength' && <span className="add-form__error">Last Name is too short.</span>}
                <label className="add-form__label">Email:
                    <input type="email" className="add-form__input" ref={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })} name="email"/>
                </label>
                {errors.email && errors.email.type === 'required' && <span className="add-form__error">This field is required</span>}
                {errors.email && <span className="add-form__error">{errors.email.message}</span>}
                <label className="add-form__label">Phone:
                    <input type="tel" className="add-form__input" ref={register({required: true})} name="phone"/>
                </label>
                {errors.phone && <span className="add-form__error">This field is required</span>}
                <div className="add-form__buttons">
                    <button className="add-form__button--black" type="button" onClick={() => {
                        handleClosePop();
                        reset()
                    }}>Close
                    </button>
                    <button className="add-form__button--white" type="submit">Add</button>
                </div>
            </form>
        </div>
    )
};


export default AddForm;