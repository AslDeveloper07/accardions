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
          >
            <h3>{item.title}</h3>
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                className="accordion-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
