import React from "react";
import styles from "./index.module.scss";
import Main from "../../components/Main";

const About = () => {
  return (
    <Main>
      <section className="container">
        <div className={styles["about-page"]}>
          <div class="card-body text-center">
            <h5 class="card-title mb-5">Tentang</h5>
            <p className="card-tex">
              Kami Babystuffrent adalah rental perlengkapan bayi yang bertujuan
              membantu para orang tua untuk dapat memberikan fasilitas terbaik
              untuk menemani tumbuh kembang anak. Mulai beroperasi pada
              September 2017, dimulai dengan 15 barang dan saat ini telah
              mengelola ratusan barang perlengkapan bayi. Saat ini Baby Stuff
              Rent tidak hanya melayani para orang tua di Purwakarta. Akan
              tetapi kami siap untuk melayani para orang tua di daerah Jakarta,
              Depok, Tangerang Selatan, Bekasi, dan Bandung.
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default About;
