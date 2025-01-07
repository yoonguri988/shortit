import Head from "next/head";
import QRCodeForm, { QRCodeFormType } from "@/components/QRCodeForm";
import styles from "@/styles/QRCodeEditPage.module.css";
import { useRouter } from "next/router";
import axios from "@/lib/axios";
import QRCode from "@/db/models/QRCode";

export async function getServerSideProps(content) {
  const { id } = content.query;
  const qrCodes = await QRCode.findById(id);
  return {
    props: {
      qrCodes: JSON.parse(JSON.stringify(qrCodes)),
    },
  };
}

export default function QRCodeEditPage({ qrCodes }) {
  const router = useRouter();
  const { id } = router.query;
  async function handleSubmit(values) {
    await axios.patch(`/qrcodes/${id}`, values);
    router.push("/qrcodes/");
  }

  return (
    <>
      <Head>
        <title>QRCode 수정하기 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>QRCode 수정하기</h1>
        <QRCodeForm
          type={QRCodeFormType.Edit}
          initialValues={qrCodes}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
