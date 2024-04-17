import "./reduction.css"
export const ProduitReduction=(even)=>{



    return(

        <div>

        <div id='cardx2' class="card mt-2  ">
        <img src={even.src} class="card-img-top" alt="..."/>
        <div class="card-body">
            <p id='badge2' className='danger'>{even.reduction}</p>
            <h6  id='nameProduct' className='text-danger'>{even.name}</h6>
            <p id='nameProduct' className='text-black'>{even.detaille}</p>
            <h6 id='nameProduct' className='text-black'>{even.message}</h6>
            <button id='btn_voir_plus' className='btn btn-danger'>voir +</button>

        </div>
        </div  >


        </div>
    )
}