import React from "react"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import NotFound from "../../assets/images/page_not_found/page-not-found.png"
import '../../styles.scss'

export const NotFoundPage: React.FC = () => {
  return (
    <>
    <Header />
    <div className="page-not-found-container">
      <h1 className="page-not-found-title">Page not found</h1>
      <div className="notFoundPage_Img">
        <img src={NotFound} className="notFoundPage_Img" alt="NotFoundPage" />
      </div>
    </div>
    <Footer />
    </>
  )
}