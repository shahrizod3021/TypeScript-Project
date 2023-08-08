import { log } from "console"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

export const Basic = () => {
    const [id, setId] = useState(0)
    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [link, setLink] = useState('')
    const [technology, setTechnology] = useState('')
    const [fee, setFee] = useState('')
    const [requestTime, setRequestTime] = useState('')
    const [goal, setGoal] = useState('')
    const [img, setImg] = useState('')

    const employe =  [
        {
            id: 1,
            age:"17",
            name:"Qozijonov Qozibekov",
            phoneNumber: "+998 88 581 06 30",
            link:"https://google.com",
            address: "Toshkent shahar",
            technology:"Java, Spring, Spring Boot, Kotlin",
            fee: "150",
            requestTime:'9:00 - 21:00',
            goal:"Maqsadim Seniro Java dasturchi bo'lish",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFM4qbYHAVD_hZ9ewblapanS_oBPjK1252b_Y5elOLD3asLmyWcjh9ekf8XVPVtSnPWok&usqp=CAU"
        }
    ]
    const addEmploye = async () => {
        if(name.length === 0 || age.length === 0 || phoneNumber.length === 0 || link.length === 0 || address.length === 0 || technology.length === 0 || fee.length === 0 || requestTime.length === 0 || goal.length === 0 || img.length === 0){
            return toast.error("Nimadir qolib ketti ma'lumotlarni yaxshilab tekshiring", {duration:5000, position:"top-center"})
        }
        const data =  {
            id:id+1,
            name:name,
            age: age,
            phoneNumber: phoneNumber,
            link: link,
            address: address,
            technology:technology,
            fee: fee,
            requestTime: requestTime,
            goal: goal,
            img: img,
        }
        employe.push(data)
        return toast.success("ishchi saqlandi", {duration:5000})
    }
    
    const filter = employe.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    return(
        <div>
            <div className="container">
                <div className="row col-12 mb-5">
                    <div className="col-10">
                        <form >
                            <div className="input-group mb-3 ">
                                <input type="text" value={search} onChange={e => setSearch(e.target.value)} className="form-control " placeholder="Qidiring" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary" data-bs-toggle={"offcanvas"} data-bs-target={"#addEmploye"} style={{float:"right"}}>qo'shish <i className="bi bi-plus-circle"></i></button>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    {search.trim().length === 0 ? (
                        <>
                    {employe.map((item) => (
                        <>
                            <div className="col">
                                <div className="card">
                                    <img src={item.img} className="card-img-top" alt="..."/>
                                    <div className="card-header">
                                        <h5 className="cart-title">F.I.SH {item.name} </h5>
                                        <h6 className="card-text">Yosh: {item.age}</h6>
                                    </div>
                                    <div className="card-body">                       
                                        <p className="card-text"><i className="fa-brands fa-java me-2 text-primary" style={{fontSize:"25px"}}></i>Texnalogiyalar: <span className="text-primary">{item.technology}</span></p>
                                        <p className="card-text"><i className="fa-solid fa-link me-2 text-primary"></i>Ulanish uchun: <a href={item.link} target="blank">{item.link}</a></p>
                                        <p className="card-text"><i className="fa-solid fa-phone me-2 text-primary"></i>Aloqa: {item.phoneNumber}</p>
                                        <p className="card-text"><i className="fa-solid fa-map-location me-2 text-primary"></i>Hudud: {item.address}</p>
                                        <p className="card-text"><i className="fa-solid fa-hand-holding-dollar me-2 text-primary"></i>Narhi: {item.fee}$</p>
                                        <p className="card-text"><i className="fa-regular fa-clock me-2 text-primary"></i>Murojat qilish vaqti: {item.requestTime}</p>
                                        <p className="card-text"><i className="fa-solid fa-arrow-trend-up me-2 text-primary"></i>Maqsad: {item.goal}</p>
                                    </div>
                                </div>         
                            </div>
                        </>
                    ))}
                         </>
                    ) : (
                        <>
                        {filter.length !== 0 ? (
                            <>
                                 {filter.map((item) => (
                        <>
                            <div className="col">
                                <div className="card">
                                    <img src={item.img} className="card-img-top" alt="..."/>
                                    <div className="card-header">
                                        <h5 className="cart-title">F.I.SH {item.name}</h5>
                                        <h6 className="card-text">Yosh: {item.age}</h6>
                                    </div>
                                    <div className="card-body">                       
                                        <p className="card-text"><i className="fa-brands fa-java me-2 text-primary" style={{fontSize:"25px"}}></i>Texnalogiyalar: <span className="text-primary">{item.technology}</span></p>
                                        <p className="card-text"><i className="fa-solid fa-link me-2 text-primary"></i>Ulanish uchun: <a href={item.link} target="blank">{item.link}</a></p>
                                        <p className="card-text"><i className="fa-solid fa-phone me-2 text-primary"></i>Aloqa: {item.phoneNumber}</p>
                                        <p className="card-text"><i className="fa-solid fa-map-location me-2 text-primary"></i>Hudud: {item.address}</p>
                                        <p className="card-text"><i className="fa-solid fa-hand-holding-dollar me-2 text-primary"></i>Narhi: {item.fee}$</p>
                                        <p className="card-text"><i className="fa-regular fa-clock me-2 text-primary"></i>Murojat qilish vaqti: {item.requestTime}</p>
                                        <p className="card-text"><i className="fa-solid fa-arrow-trend-up me-2 text-primary"></i>Maqsad: {item.goal}</p>
                                    </div>
                                </div>         
                            </div>
                        </>
                    ))}
                            </>
                        ) : (
                            <>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                              <h3 className="text-danger text-start">hech narsa topilamdi</h3>
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADSCAMAAAD5TDX9AAAAYFBMVEX19fWZmZkzMzOEhITZ2dnu7u5HR0dWVlahoaGysrJ7e3vW1ta7u7vc3NxOTk7f399dXV3Ly8upqam4uLg4ODhnZ2fp6ek/Pz+zs7N0dHSKiopubm7ExMSWlpbl5eWlpaUhZLfyAAAEYElEQVR4nO2c65KiMBBGQQdEAbmIoKLM+7/lGm6BkBZ0tibT1Hd+7Gqla+2zSToBg5YFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJjhhMkpTT3b9tL0lISO6Xz+I3mytxXSZCWC4UStYR+azuznRITbGvzyC+0muHAen773Wu5ZZHzTOX5MMOcmCExn+RnOixk3mn0cR2eeLpN7rg789JzFchz1JsMy6BWcyXzcm8z0A6YFZVAc/Ukjr9Iyzd9OZGsybeW0MDiade61nZeby/ZdTtP0Z+zsk7ls3yTSZD+0u+vaI3P5vod2Gb/Ldq0dl7oZ6pKftePSefod2KDo6/efPDrP0eY+b2ez2LHoKuIiu4T+N/8OxAZzUPKJS1oOQ5MYmAvsOAxNfcW07YsMoS78GNxmIabdcNxRdgwmnm4XpthRl34MrhSo1NO3Qv4qC1L/5mtH3eT7liGUnWcu66UQmQ/tyLuc5rJeCpX5oGMY21GpD+wW/Af8Vcg7fTKEimBQVX5gx2CjSa3m0o7aiXK4t0LtxOz+rpf2touAwU6M2kXb3r6FLJkMdtHkuJuHwRUQXVbmYFBUXky8ORhMO8vKieT7rwo0XzLUcBiY5MWpDNC3sxiYZNWUAfp2BhWzRt95sp1z11GdJ9tZdx1xS08261oZ7MI6dN9OvrbzeBTMBl3Rl62aRk7fLGu/KpCN0zYG9/pGTOvmi9WcTb3sWPdpnHWfpFr5KThr3ScYrZWfPn2OzpmTwyemo7Jjzae+BWs+sS9wVvy0RY0TJkH3pEywridlAAAAAAAAAAAAAAAAAABglM3Xb3/i1u2PcQfubPCmZffRZxmw2xy6lzq7/egMyvYaNVQffZYBu23RnVzT2d3GdodpxBsYsHukbtsTGjsnZm53s87X5mVr53hxke0e4pvHW1bPsv7HDUZ2gziZeLgR74/+1+GYFef2mEd1a95kJuyionkQubHL4/gURUG8q3t0R/bdOE6xe7i2X/mPrB70kXu+V+Fl923AbmtZ7dhs7A7nujeccyn+ou3GcYpd1hzb9+ra2kRY+dFEVXn+UdZjs7YLN+3Bmq/6BWmnxCl27ViPNpUIaNs8Q3ZRISRqu7RfymLxlKBit8ka9mqcYtc9PyrM+0jfkJ2VFlVrd7t2LQfRUYpd6Tfkapxi1y0ywq6PzE3ZWWXZ2snBV2dFjkwlTrHrzsQJOxlpzK4q0iV9J+2IvvOndn2kY8zO2hfRvZ53x65FN++knRLX1Zj71M6L2zfG5t2Ta5kIu0qpmaNHdAd2Spzb/t7RY2qXZO1eKDVoV7nber3bxsN1rLyNggfr3Tju2g5wd2pnxU2bszOzmjdcNrWdc94N9iBpEeRVf0UwtBvH+dk2qfz0aGvsfPea5FUQezuDdta13Wd+i/1j9xidd8zc/hdjxvvMUVxSFtnTwtHYtfvMu1X+uh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBq+Qcf9zKBTrP28AAAAABJRU5ErkJggg==" alt="" />
                            </div>
                            </>
                        )}
                        </>
                    )}
                    
                </div>
            </div>
                     <div className="offcanvas offcanvas-end" id="addEmploye" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                               <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>        
                        </div>          
                        <div className="offcanvas-body">
                            <h3 className="offcanvas-title">Ishchi qo'shish</h3>
                            <form className="mt-4">
                                <label htmlFor="name">Ism</label>
                                <input type="text" className="form-control shadow-lg" placeholder="ism va familyangizni kiriting" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
                                <label htmlFor="age" className="mt-4">Yosh</label>
                                <input type="number" className="form-control shadow-lg" placeholder="Yoshingizni kiriting" id="age" name="age" value={age} onChange={e => setAge(e.target.value)}/>
                                <label htmlFor="address" className="mt-4">Hudud</label>
                                <input type="text" className="form-control shadow-lg" placeholder="Yashash yoki ishlash hududini kiriting" id="address" name="address" value={address} onChange={e => setAddress(e.target.value)}/>
                                <label htmlFor="link" className="mt-4">Ulanish uchun link. Instagram yoki telegram</label>
                                <input type="text" className="form-control shadow-lg" placeholder="Ijtimoiy tarmoq linkini qoldiring" id="link" name="link" value={link} onChange={e => setLink(e.target.value)}/>
                                <label htmlFor="phoneNumber" className="mt-4">Telefon raqam</label>
                                <input type="number" className="form-control shadow-lg" placeholder="Telefon raqamingizni qoldiring" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                                <label htmlFor="technology" className="mt-4">Texnalogiyalar</label>
                                <input type="text" className="form-control shadow-lg" placeholder="M.u: Java, C++, HTML, CSS" id="technology" name="technology" value={technology} onChange={e => setTechnology(e.target.value)}/>
                                <label htmlFor="fee" className="mt-4">Oylik maosh</label>
                                <input type="number" className="form-control shadow-lg" placeholder="agar kerak bo'lmasa 0 qoldiring" id="fee" name="fee" value={fee} onChange={e => setFee(e.target.value)}/>
                                <label htmlFor="requestTime" className="mt-4">Bog'lanish vaqti</label>
                                <input type="text" className="form-control shadow-lg" placeholder="M.u: 9:00 - 22:00" id="requestTime" name="requestTime" value={requestTime} onChange={e => setRequestTime(e.target.value)}/>
                                <label htmlFor="goal" className="mt-4">Maqsad</label>
                                <input type="text" className="form-control shadow-lg" placeholder="maqsadingiz haqida qisqacha" id="goal" name="goal" value={goal} onChange={e => setGoal(e.target.value)}/>
                                <label htmlFor="img" className="mt-4">Rasm</label>
                                <input type="text" className="form-control shadow-lg" placeholder="rasm linki" id="img" name="img" value={img} onChange={e => setImg(e.target.value)}/>
                                <div className="mt-3 " style={{float:"right"}}>
                                    <button className="btn btn-outline-secondary me-2">Tozalash</button>
                                    <button className="btn btn-outline-success" type="button" onClick={() => addEmploye()}>Saqlash</button>
                                </div>
                            </form>
                        </div>                
                    </div>
        </div>
    )
}