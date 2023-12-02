import React from "react";
import "./home.css";

export function Home(){
    return(
        <div className="home">
        <container>
            <div className="form">
                <table className="table">
                    <tr>
                    <p>

                       <h3>OUR PRODUCTS:</h3>
                       <hr></hr>
                        Our Products are the most wanted products in the market. in the year 2023, our products got the 
                        heights number sales. Our consumers and customers always have satisfaction from our products which 
                        made our products the most wnanted and market friendly in the US. 
                        beside quality we have the ability of producing high quantity of our products inside and outside
                        of the USA.
                      
                    </p> 

                    </tr>
                    <tr>
                    <div className="py-2 mb-17" >
                        <div id="carouselExampleControls"  className="carousel slide col-lg-9" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src="https://th.bing.com/th/id/R.b72da01232f52500d049f6f1e61af5e1?rik=4Xdmfsihy29Wbw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f0%2ff%2f860468-popular-hd-apple-wallpapers-1080p-1920x1080-for-macbook.jpg&ehk=zH25Pc9Jkm3a6v2tkIdnhojsRztEVZd2%2bzVmOdFV6WU%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item active">
                                    <img src="https://images.wallpaperscraft.com/image/single/swallowtail_butterfly_flower_1111295_1920x1080.jpg" className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item active">
                                    <img src="https://wallpapercave.com/wp/wp9304424.jpg" className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item active">
                                    
                                    <img src="https://wallpaperaccess.com/full/3166553.jpg" className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item active">
                                    <img src="https://th.bing.com/th/id/OIP.yeb7G5bioJaEu6IFFwM02wHaEK?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item active">
                                    <img src="https://wallpapercave.com/wp/wp1877608.jpg" className="d-block w-100" alt="..."/>
                                    </div>
                                    
                                    <div className="carousel-item active">
                                    <img src="https://images.wallpaperscraft.com/image/single/swallowtail_butterfly_flower_1111295_1920x1080.jpg" className="d-block w-100" alt="..."/>
                                    </div>
                                    
                                    
                                   
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden"><h3>Previous Slide</h3></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden"><h3>Next Slide</h3></span>
                                </button>
                            </div>
                        
                    </div>

                    </tr>
                    
                </table>  
            </div>  

        </container>

        </div>
               
    );
}