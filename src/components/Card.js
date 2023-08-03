import React from "react";
const getTypeName = type => {
    switch (type) {
        case 'income':
            return 'Thu nhập';
        case 'outcome':
            return 'Chi tiêu';
        default:
            return 'Hông bít';

    }
};


export default function Card(props) {
    /*console.log(props);
    const todo = props.todo;*/
    const { todo , removeData , changeType } = props;
    return (
        <div className="card" >
            <div className="card-body ">
                <h5 className="card-title">{todo.title}</h5>
                <h5 className={`card-title ${todo.type === 'income' ? 'text-success' : 'text-danger'}`}>{todo.amount}</h5>
                <p className="card-text">Loại:{getTypeName(todo.type)}</p>
                <div className="mb-0 d-flex align-items-center" style={{ gap: '12px' }}>
                    <button className="btn btn-danger px-4" onClick={() => {removeData(todo.id)}}>Xóa</button>
                    <button className="btn btn-primary px-4" onClick={() =>{changeType(todo.id)}}>Sửa</button>

                </div>
            </div>

        </div>
    )
}