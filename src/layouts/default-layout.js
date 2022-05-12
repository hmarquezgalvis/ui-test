import React from 'react'
import { Header } from '../components/shared/header/header'
import { BannerBottom } from '../components/shared/banners/banner-bottom'
import { BannerTop } from '../components/shared/banners/banner-top'
import { Footer } from '../components/shared/footer/footer'
import { Navigation } from '../components/shared/navigation/navigation'

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Header />
      <div className="max-centered">
        <BannerTop />
        <main role="main">
          {children}
        </main>
        <BannerBottom />
        <hr />
        <Footer />
      </div>
    </>
  );
};