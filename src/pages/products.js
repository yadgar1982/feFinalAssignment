import React, { useEffect, useState } from "react";
import "./products.css";



export function Products(){
    const [content, setContent]= useState(<ProductList showForm={showForm}/>);
    function showList(){
        setContent(<ProductList showForm={showForm}/>);
    }
    //this function will show the product form  for product data entry 
    function showForm(product){
        setContent(<ProductForm  product = {product} showList = {showList}/>);
    }
    return(
        <div className="pro">
            <container>
                {content}
            </container>
        </div>
    
    );
}
//this function will get data from the json server
function ProductList(props){
    const [products, setProducts] = useState([]);

    function fetchProducts(){
        fetch("http://localhost:3000/products")
        .then ((response)=> {
            if(!response.ok){
                throw new Error("Unexpected Server Response");
            }
            return response.json()
        })
        .then ((data)=> {
            console.log(data);
            setProducts(data);
        })
        .catch((error)=> console.log("Error:",error));
    }
    useEffect(()=>fetchProducts(),[]);
// this function will delete data from the server
    function deleteProduct(id){
        fetch('http://localhost:3000/products/'+ id, {
            method:"DELETE"
            
        })

            .then ((response)=> response.json())
            .then ((data)=> fetchProducts());
            alert("Your Data has been deleted successfully!")
    }

    
    return(
        <div >
            
            <table>
                <tr>
                    <h5 className="text-center mb-3 my-2" style={{float:"left"}}>List of Products</h5>

                </tr>
                <hr></hr>
                <tr>
                    <button onClick={()=> props.showForm({})} type="button" className="btn btn-primary me-3 my-3" >Add New Product</button>
                    <button onClick={()=> fetchProducts()} type="button" className="btn btn-outline-success me-2">Refresh</button>

                </tr>
                <tr>
                    <div className="tbl">
                        <table className="table table-success table-stripped">
                            <thead>
                                <tr className="tr">
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Brand</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Product Date</th>
                                    <th>Actions</th>
                                

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // here we will copy the file on the page from the server through the fetch function. 
                                    products.map((product, index)=>{
                                        return(
                                            <tr key = {index}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.brand}</td>
                                                <td>{product.price}</td>
                                                <td>{product.description}</td>
                                                <td>{product.productDate}</td>
                            
                                                <td style = {{width: "10px", whiteSpace: "nowrap"}}>
                                                    <button onClick={()=>props.showForm(product)} type="button" className="btn btn-primary btn-sm me-2"> <i className="bi bi-pencil"></i> Edit</button>
                                                    <button onClick={()=> deleteProduct(product.id)}type="button" className="btn btn-danger btn-sm "><i className="bi bi-trash3"></i> Delete</button>
                                                </td>
                                            </tr>

                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </tr>
            </table>

        </div>

    );
};

function ProductForm(props){
    const [errorMessage,setErrorMessage]=useState("");
   function handleSubmit(event){
        event.preventDefault();
        //read Data from form
        const formData = new FormData (event.target);

        //convert form Data to object:
        const product = Object.fromEntries(formData.entries());

        //form validation here 
        if(!product.name ||!product.brand || !product.price ||!product.description) {
            console.log("please fill all fields!");
            alert("Please fill all the fields, some fields are empty")
            // setErrorMessage(
            //     <div className="alert alert-danger" role="alert" >
            
            //     Please Fill All the Fields!
            //     </div>
                
            // )
            return;
        }

        
        if(props.product.id){
            //here we will update the data and I have used Patch method instead of put method to shorten the process.
            fetch("http://localhost:3000/products/" + props.product.id,{
                method:"PATCH",
                headers:{
                    "content-type":"application/json",
    
                },
                body: JSON.stringify(product)
            })
                .then((response)=> {
                    if(!response.ok){
                        throw new Error ("Network response was not OK");
    
                    }
                    return response.json()
                })
                .then((data)=> props.showList())
                .catch((error)=>{
                    console.error("Error:", error);
                 
                    
                });
    
        }
        else{

            // Create A new product
            
        
            product.productDate =  new Date().toISOString().slice(0,10);
            fetch("http://localhost:3000/products",{
                method:"POST",
                headers:{
                    "content-type":"application/json",

                },
                body: JSON.stringify(product)
            })
                .then((response)=> {
                    if(!response.ok){
                        throw new Error ("Network response was not OK");

                    }
                    return response.json()
                })
                .then((data)=> props.showList())
                .catch((error)=>{
                    console.error("Error:",error);
                });
        }
    }
    
    return(
        <>
            <container className="row mb-2">
                <div className="col d-flex">{errorMessage}</div>
            
            
                
                        {/* // this form is made for data entry of products */}
                                    
                        <form  onSubmit={(event)=> handleSubmit(event)}>
                                            <div><h5 className="text-center mb-2  " style={{float:"left"}}>{props.product.id ? "Edit Product" : "Add New Product"}</h5></div>
                                            <hr></hr>
                                            { props.product.id &&  
                                            <div className="row mb-3 my-2">
                                                <label className="col-sm-3 col-form-label my-2">ID</label>
                                            <div className="col-sm-4">
                                                    <input readOnly className=" form-control-plaintext"
                                                    box-sizing="border-box"
                                                    
                                                    name="id"
                                                    defaultValue={props.product.id}/>
                                            </div>
                                            </div>}
                                            <div className="row mb-2">
                                                <label className="col-sm-3 col-form-label mb-3"><h7>Name</h7></label>
                                                <div className="col-sm-7">
                                                    <input className="form-control"
                                                    name="name"
                                                    defaultValue={props.product.name}/>
                                                </div>
                                            </div>
                                            <div className="row mb-2 ">
                                                <label className="col-sm-3 col-form-label"><h7>Price</h7></label>
                                                <div className="col-sm-7">
                                                    <input className="form-control"
                                                    name="price"
                                                    defaultValue={props.product.price}/>
                                                </div>

                                            </div>
                                            <div className="row mb-2 ">
                                                <label className="col-sm-3 col-form-label"><h7>Product Categories</h7></label>
                                                <div className="col-sm-7 my-2" >
                                                    <select className="form-select" 
                                                    name="brand"
                                                    defaultValue={props.product.brand}>
                                                        <option value="">Select Your Product Cagetory</option>
                                                        <option value="food">Food</option>
                                                        <option value="electronics">Electronics</option>
                                                        <option value="health">Vehicle</option>
                                                        <option value="Others">Cloths</option>
                                                        <option value="Others">Other Products</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="row mb-2 ">
                                                <label className="col-sm-3 col-form-label "><h7>Description</h7></label>
                                                <div className="col-sm-7 my-2">
                                                    <textarea className="form-control"
                                                    rows={4}
                                                    cols={5}
                                                    name="description"
                                                    defaultValue={props.product.description}/>
                                                </div>
                                                

                                            </div>
                                        
                                            <div className="row mb-2">
                                                <div className="offset-sm-3 col-sm-4 d-grid">
                                                    <button type="submit" className="btn btn-success mb-3 "> {props.product.id ? "Edit" : "Save"}</button>
                                                </div>
                                                <div className="col-sm-3 col-sm-2 d-grid">
                                                    <button  onClick={()=> props.showList()} type="button" className="btn btn-danger mb-3 em-2 ">Cancel</button>
                                                </div>
                                                
                    </div>
                                            
                </form>
           
            </container>
         
                
           
        
        </>
        
        
        );
};