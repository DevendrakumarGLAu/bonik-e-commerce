import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "S. Chand Publishing",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Pustak Mahal",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "APK Publishers",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Srishti Publishers",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Petals Publishers",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Fingerprint Publishing",
    },
    
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Publishers </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
