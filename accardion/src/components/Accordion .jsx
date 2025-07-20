import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './../index.css'

const data = [
  {
    title: "Nima uchun React ishlatiladi?",
    content: "React UI yaratishda komponentlarga asoslangan, qayta foydalanish mumkin bo‘lgan tuzilmani beradi."
  },
  {
    title: "Framer Motion nima qiladi?",
    content: "Framer Motion - React ilovalari uchun kuchli, qulay animatsiya kutubxonasi."
  },
  {
    title: "Accordion qanday ishlaydi?",
    content: "Accordion har bir item uchun holatni saqlaydi va shunga qarab kontentni ochib-yopadi."
  }
];



const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              padding: "12px 20px",
              background: "#f0f0f0",
              borderRadius: "8px",
              marginBottom: "8px",
            }}
          >
            <h3 style={{ margin: 0 }}>{item.title}</h3>
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  overflow: "hidden",
                  padding: "0 20px",
                  background: "#fff",
                  borderRadius: "0 0 8px 8px",
                }}
              >
                <div style={{ padding: "10px 0" }}>
                  <p style={{ margin: 0 }}>{item.content}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};


export default Accordion;
