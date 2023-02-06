
import { MDBBtn, MDBInput, MDBValidation } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createUserStart, updateUserStart } from "../stores/actions/actions";

const inittialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
}

const AddEditUser = () => {
    const [formValue, setFormValue] = useState(inittialState);
    const { name, email, phone, address } = formValue;
    const [edit, setEdit] = useState(false);
    const history = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const users = useSelector((state) => state.data.users);

    useEffect(() => {
        if (id) {
            setEdit(true);
            const singleUser = users.find(item => item.id === Number(id));
            setFormValue({ ...singleUser });
        }
    }, [id])

    const handleSubmit = () => {
        if (name && email && phone && address) {
            if (!edit) {
                dispatch(createUserStart(formValue));
            } else {
                dispatch(updateUserStart(formValue));
                setEdit(false);
            }

            history("/");
        }
    }
    console.log("ddd:", edit);
    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }
    return (
        <MDBValidation className="row g-3" style={{ marginTop: "100px" }} noValidate
            onSubmit={handleSubmit}
        >
            <p className="fs-2 fw-bold">{!edit ? "AddUser" : "EditUSER"}</p>
            <MDBInput
                value={name || ""}
                name="name"
                type="text"
                onChange={onInputChange}
                required
                label="name"
                validation="Nhap ten"
            />
            <MDBInput
                value={email || ""}
                name="email"
                type="email"
                onChange={onInputChange}
                required
                label="Email"
                validation="Nhap email"
            />
            <MDBInput
                value={phone || ""}
                name="phone"
                type="number"
                onChange={onInputChange}
                required
                label="Phone"
                validation="Nhap phone"
            />
            <MDBInput
                value={address || ""}
                name="address"
                type="text"
                onChange={onInputChange}
                required
                label="Address"
                validation="Nhap address"
            />
            <br />
            <div className="col-12">
                <MDBBtn
                    style={{ marginRight: "10px" }}
                    type="submit"
                >{!edit ? "ADD" : "UPDATE"}</MDBBtn>
                <MDBBtn
                    onClick={() => history("/")}
                    color="danger"
                >Goback
                </MDBBtn>
            </div>
        </MDBValidation>
    )
}

export default AddEditUser;