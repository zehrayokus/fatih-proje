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
      "Hac; belli zamanda belli yerlerde yapılan ibadettir. Belli zamanlardan kasıt ihrama girip Zilhicce ayının 9 günü zevaldan yani ögle namazından başlayıp güneşin doğumuna kadar bir lahza olsa dahi; hasta, baygın veya başka biçimde Arafat'a bulunmaktır. Umre ise belli yerlerde yapılan ibadettir.",
  },
  {
    question: "Hacda hangi ibadetler yapılır?",
    answer:
      "Hacc için yapılan ibadetler; İhram Arafatta vakfe, Müzdelife, Minada şeytan taşlama, Tıraş olma, Ziyaret tavafı, Sâi. Varsa eğer şükür veya ceza kurbanı kesmektir.",
  },
  {
    question: "Hac hangi aylarda yapılır?",
    answer: "Hac ibadeti Şevval, Zilkade ve Zilhicce aylarında yapılır.",
  },
  {
    question: "Umre için belirli yerler neresidir?",
    answer: "Umre niyetiyle ihrama girip Kâbe'yi yedi defa usulüne göre tavaf edip safa Merve'ye yedi defa sâyi yapıp tıraş olmaktır. Umre için belirli yerler Kâbe, Safa ve Merve dir.",
  },
  {
    question: "Hac sırasında kurban kesmek gerekir mi?",
    answer:
      "Temettü ve Kıran haccı yapanlar için Hac ve İhramin vaciplerinden birini yerine getirmeyenler için kurban kesmek farzdır.",
  },
];

function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div
      id="sikca-sorular"
      style={{ ...styles.container, scrollMarginTop: "120px" }}
    >
      <div style={styles.header}>
        {/* SOL */}
        <div style={styles.left}>
          <h2 style={styles.title}>Sıkça Sorulan Sorular</h2>
          <p style={styles.subtitle}>
            Hac ve umre ile ilgili en çok merak edilen soruları sizler için
            derledik. Aşağıdaki sorulara tıklayarak cevaplarını
            görüntüleyebilirsiniz.
          </p>
        </div>

        {/* SAĞ */}
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
                  maxHeight: openIndexes.includes(index) ? "200px" : "0px",
                  opacity: openIndexes.includes(index) ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
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
    width: "100%",
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    flexWrap: "wrap", // 🔑 MOBİLDE ALT ALTA
    gap: "40px",
  },
  left: {
    flex: "1 1 300px",
  },
  title: {
    fontSize: "32px",
    color: "#0b3d51",
    margin: 0,
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "17px",
    color: "#000",
    lineHeight: "1.4",
  },
  questionsBox: {
    flex: "1 1 380px",
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
    fontSize: "17px",
  },
  answer: {
    marginTop: "8px",
    color: "#000",
    lineHeight: "1.5",
    fontSize: "15px",
  },
  icon: {
    marginLeft: "10px",
  },
};

export default FAQ;
