import { useState } from "react";
import Card from "../components/Card";
function TodoPage() {
    const initData = [
        {
            id: 1,
            title: 'Day la title',
            amount: 50000,
            type: 'income',
        },
        {
            id: 2,
            title: 'Day la title',
            amount: 100000,
            type: 'outcome',
        },
        {
            id: 3,
            title: 'Day la title',
            amount: 100000,
            type: 'vovan',
        }
    ];
   
      
    const [listData , setListData] = useState(initData);
    const [form , setForm] = useState({
        type:'income',
    });
    const changeType = (dataID)  => {
        const newArray = listData.map(item => {
            if (item.id === dataID) {
                if (item.type === 'outcome'){
                    item.type = 'income'
                }
                else {
                    item.type = 'outcome'
                }
                
            }
            return item;
        })
        setListData(newArray);
               
    };
    const handleChangeFormData = (e) => {
        
        const myValue = e.target.value;
        const myKey = e.target.name;
        console.log(myKey);
        setForm({
            ...form,
            [myKey]: myValue,})
    };
    const handleSubmitData= () => {
        console.log(form);
        const obj = {...form,id: new Date().getTime()};
        setListData([...listData , obj]);
        setForm({
            type: 'income',
            title:'',
            amount:''
        })
    };
    const removeData = (dataId) => {
        const listDataCopy = [...listData];
        const matchIdx = listData.findIndex(todo => {
            return todo.id === dataId;

        });
        if (matchIdx !== -1) {
            listDataCopy.splice(matchIdx, 1);
            setListData(listDataCopy);
        }
    };
    return (
        <div>
            <div className="container">
                <div>
                    <div className="mb-3">
                        <label  className="form-label">Tiêu đề </label>
                        <input value={form.title} type="email" className="form-control" name="title" id="exampleFormControlInput1" placeholder="Tiêu đề" onChange={handleChangeFormData}></input>
                    </div>
                    
                    <div className="mb-3">
                        <label  className="form-label">Số tiền</label>
                        <input value={form.amount} className="form-control" name="amount" id="exampleFormControlTextarea1" rows="3" placeholder="Số tiền" onChange={handleChangeFormData}></input>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Loại</label>
                        <select className="form-select" value={form.type} aria-label="Default select example">
                            <option value="income" >Thu nhập</option>
                            <option value="outcome">Chi tiêu</option>
                            
                        </select>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-success" onClick={handleSubmitData}>THÊM</button>

                    </div>
                </div>
                <div className="py-3">
                    <div className="row">
                      

                    {listData.map(data => {
                        return <div className="col-4">
                            <Card key={data.id} todo={data} removeData={removeData} changeType={changeType}/>;
                        </div>
                    })}
                    

                    </div>
                
                </div>

            </div>
        </div>

    );
}
export default TodoPage;