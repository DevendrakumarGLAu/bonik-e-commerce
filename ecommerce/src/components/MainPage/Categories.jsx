import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/mystery.png",
      cateName: "Mystery",
    },
    {
      cateImg: "./images/category/poetry.png",
      cateName: "Poetry",
    },
    {
      cateImg: "./images/category/romance.png",
      cateName: "Romance",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Biograpy",
    },
    {
      cateImg: "./images/category/fantasy.jpg",
      cateName: "Fantasy",
    },
    {
      cateImg: "./images/category/music.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Business",
    },
    {
      cateImg: "./images/category/fiction.png",
      cateName: "Fiction",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Non-Fiction",
    },
    {
      cateImg: "./images/category/thriller.png",
      cateName: "Thriller",
    },
    {
      cateImg: "./images/category/history.png",
      cateName: "History",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
