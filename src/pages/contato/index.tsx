import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./contato.module.scss";
import { Helmet } from "react-helmet";

import HeaderComponent from "../../components/header";

const ContatoPage = () => {
  return (
    <>
      <Helmet>
        <title>Contato | SAEC 2021</title>
        <meta
          name="description"
          content="Entre em contato com a equipe da SAEC UFSC 2021"
        />
      </Helmet>
      <HeaderComponent />

      <main className={styles.main}>Contato</main>
    </>
  );
};

export default ContatoPage;
