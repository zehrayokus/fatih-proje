// FAQ.jsx
import React, { useState } from "react";

const faqData = [
  {
    question: "Hac kimlere farzdır?",
    answer:
      "Müslüman, akıllı, ergenlik çağına gelmiş ve maddi imkanı olanlara farzdır.",
  },
  {
    question: "Umre ile hac arasındaki fark nedir?",
    answer:
      "Hac belirli vakitlerde yapılır, umre ise yılın herhangi bir zamanında yapılabilir.",
  },
  {
    question: "Hacda hangi ibadetler yapılır?",
    answer:
      "İhram, tavaf, sa’y, vakfe ve kurban kesmek hac ibadetlerinin temel bölümleridir.",
  },
  {
    question: "Hac hangi aylarda yapılır?",
    answer: "Hac ibadeti Şevval, Zilkade ve Zilhicce aylarında yapılır.",
  },
  {
    question: "Umre yapmak farz mıdır?",
    answer: "Umre sünnettir, farz değildir.",
  },
  {
    question: "Hac sırasında kurban kesmek gerekir mi?",
    answer:
      "Temettü ve kıran haccı yapanlar için kurban kesmek vaciptir, ifrad haccında vacip değildir.",
  },
];

function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]); // birden fazla açık soru tut

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      // zaten açıksa kapat
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // açık değilse ekle
      setOpenIndexes([...openIndexes, index]);
    }
  };

return (
  <div id="sikca-sorular" style={{ ...styles.container, scrollMarginTop: "120px" }}>
    <div style={styles.header}>
      <div style={{ flex: "1" }}>
        <h2 style={styles.title}>Sıkça Sorulan Sorular</h2>
        <p style={styles.subtitle}>
          Hac ve umre ile ilgili en çok merak edilen soruları sizler için
          derledik. Aşağıdaki sorulara tıklayarak cevaplarını
          görüntüleyebilirsiniz.
        </p>
      </div>
      <div style={styles.questionsBox}>
        {faqData.map((item, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.question} onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span style={styles.icon}>
                {openIndexes.includes(index) ? "➖" : "➕"}
              </span>
            </div>

            <div
              style={{
                ...styles.answer,
                maxHeight: openIndexes.includes(index) ? "250px" : "0px",
                opacity: openIndexes.includes(index) ? 1 : 0,
                transition: "all 0.4s ease",
                overflow: "hidden",
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

const styles = {
  container: {
    width: "1000px",
    margin: "20px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    gap: "100px",
  },
  title: {
    fontSize: "35px",
    color: "#0b3d51",
    margin: 0,
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "19px",
    color: "black",
    lineHeight: "1.5",
  },
  questionsBox: {
    flex: "3",
  },
  item: {
    marginBottom: "15px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
  },
  question: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
  },
  answer: {
    marginTop: "8px",
    paddingLeft: "10px",
    color: "black",
    lineHeight: "1.5",
    fontSize: "17px",
  },
  icon: {
    marginLeft: "10px",
  },
};

export default FAQ;
