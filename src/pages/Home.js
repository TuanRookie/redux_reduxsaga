import { MDBBtn, MDBSpinner, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserStart, loadUserStart } from "../stores/actions/actions";

const Home = () => {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.data.users);
    const loading = useSelector((state) => state.data.loading);

    useEffect(() => {
        dispatch(loadUserStart());
    }, [])

    if (loading) {
        return (
            <MDBSpinner style={{ marginTop: "100px" }} role="status">
                <span className="visually-hidden">loading...</span>
            </MDBSpinner>
        )
    }

    const handleDelete = (id) => {
        if (window.confirm("Co Chac Xoa")) {
            dispatch(deleteUserStart(id))
        }
    }
    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <MDBTable>
                <MDBTableHead dark>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody >
                    {listUsers.map((item) => (
                        <tr key={item.id}>
                            <th scope="row" >{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>
                                <MDBBtn
                                    className="m-1"
                                    tag="a"
                                    color="none"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </MDBBtn>
                                <Link to={`/editUser/${item.id}`}>
                                    Detail
                                </Link>
                                <Link to={`/userInfo/${item.id}`}>
                                    UserInfo
                                </Link>
                            </td>
                        </tr>

                    ))}
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default Home;