import React from 'react'

const Newsitem=(props)=> {
    
        let {title , description, imageurl, url, author, date , source} = props;
        return (
          
            <div>
                
                    <div className="card">
                        <img src={!imageurl? "https://theshillongtimes.com/wp-content/uploads/2023/07/artificial-sweetener.png":imageurl} className="card-img-top" alt=".../"/>
                       <div className="position-absolute   badge rounded-pill bg-danger" style={{left: 'auto', right: '0', top:'-10px',  zIndex: '1'}}> <span  > 
                            {source} </span></div>
                            <div className="card-body">
                            <h5 className="card-title">{title}   </h5>
                                <h5 className="card-title">{title}..</h5>
                                <p className="card-text">{description}..</p>
                                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                                <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark">Read More</a>
                            </div>
                    </div>
            </div>
        )
}

export default Newsitem
