import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "", // İsim Soyisim tek kutuda
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız gönderildi ✅");
    console.log("Form Verisi:", formData);

    // Burada backend'e gönderme işlemini yapabilirsin
  };

  return (
    <div
      id="iletisim"
      style={{ ...containerStyle, marginTop: "70px" }} // navbar payı bırakıldı
    >
      {/* Sol yazı kısmı */}
      <div style={textBoxStyle}>
        <h2>İletişime Geçin 👉</h2>
        <p>
          Görüş, öneri veya sorularınızı formu yazıp gönderebilirsiniz.
          En kısa sürede sizinle ime geçeceğiz.
        </p>
      </div>

      {/* Sağdaki form */}
      <form onSubmit={handleSubmit} style={formStyle}>
        Adınız Soyadınız
        <input
          type="text"
          name="fullname"
          placeholder="İsim Soyisim"
          value={formData.fullname}
          onChange={handleChange}
          style={inputStyle}
          required
        /> 
        E-postanız
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        /> 
        Mesajınız
        <textarea
          name="message"
          placeholder="Mesajınız"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Gönder</button>
      </form>
    </div>
  );
}

// ✅ Yeni eklenen stiller
const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "10px",
  width: "100%",
  maxWidth: "100%",
  margin: "20px auto",
  padding: "0 16px", // 🔑 kenarlardan az boşluk
  boxSizing: "border-box",
  flexWrap: "wrap", // 🔑 mobilde alt alta
};

const textBoxStyle = {
  flex: "1 1 280px",
  fontSize: "18px",
  color: "#001016ff",
  lineHeight: "1.4",
  maxWidth: "420px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  flex: "1 1 320px",
  maxWidth: "420px",
};

const inputStyle = {
  padding: "12px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  minHeight: "100px",
};

const buttonStyle = {
  padding: "18px",
  fontSize: "17px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#0b3d51",
  color: "white",
  cursor: "pointer",
};

export default ContactForm;
