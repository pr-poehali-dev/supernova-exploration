import type React from "react"
import { useState, useEffect } from "react"

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["ДИСТРИБЬЮЦИЯ.", "ПАРТНЁРСТВО.", "РОСТ."]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@400&display=swap');

        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }

        .photography-banner {
          margin: 0;
          background-color: #002b36;
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .photography-banner *::selection {
          background-color: rgba(0, 130, 200, 0.2);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #0082c8;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 9vw, 120px);
          line-height: 0.85;
          font-style: normal;
          text-transform: uppercase;
        }

        .left-part h1 .text {
          color: #0082c8;
          display: block;
          height: clamp(80px, 12vw, 110px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 20px 0 0;
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 2;
          font-family: "Montserrat";
          opacity: 0.8;
        }

        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 42px;
          line-height: 1;
          color: #f1f1f1;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Montserrat";
          font-weight: 300;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #ffffff;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #0082c8;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before {
          width: 65%;
        }

        .book-link:hover .arrow::after {
          height: 65%;
        }

        .book-link .arrow span {
          background-color: #0082c8;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #0082c8;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #0082c8;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(0, 130, 200, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(0, 80, 160, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
        }

        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }

          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }

          .bg-line {
            height: 52px;
          }

          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
          }

          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }

          .left-part h1 .text {
            height: 88px;
          }

          .left-part p {
            font-size: 12px;
            width: 96%;
          }

          .bg-dash-circle {
            width: 80px;
          }
        }

        /* ── ТАБЛИЦА ─────────────────────────────────────── */
        .table-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .table-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #0082c8;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: 0;
        }

        .table-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-title {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 5vw, 64px);
          line-height: 1;
          margin: 0 0 60px;
          text-transform: uppercase;
        }

        .section-title .highlight {
          color: #0082c8;
        }

        .dist-table {
          width: 100%;
          border-collapse: collapse;
          font-family: "Montserrat", sans-serif;
        }

        .dist-table thead tr {
          background: #0082c8;
        }

        .dist-table thead th {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 18px 24px;
          text-align: left;
          border: none;
        }

        .dist-table tbody tr {
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s;
        }

        .dist-table tbody tr:hover {
          background: rgba(0, 130, 200, 0.08);
        }

        .dist-table tbody td {
          color: #ccc;
          font-size: 14px;
          padding: 16px 24px;
          vertical-align: middle;
          line-height: 1.5;
        }

        .dist-table tbody td:first-child {
          color: #fff;
          font-weight: 600;
        }

        .badge-yes {
          display: inline-block;
          background: rgba(0, 200, 100, 0.15);
          color: #00c864;
          border: 1px solid rgba(0, 200, 100, 0.3);
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 600;
        }

        .badge-no {
          display: inline-block;
          background: rgba(200, 50, 50, 0.15);
          color: #ff5555;
          border: 1px solid rgba(200, 50, 50, 0.3);
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 600;
        }

        .badge-blue {
          display: inline-block;
          background: rgba(0, 130, 200, 0.15);
          color: #0082c8;
          border: 1px solid rgba(0, 130, 200, 0.3);
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 13px;
          font-weight: 600;
        }

        @media screen and (max-width: 767px) {
          .table-section {
            padding: 60px 16px;
          }
          .dist-table thead th,
          .dist-table tbody td {
            padding: 12px 12px;
            font-size: 12px;
          }
        }

        /* ── УСЛОВИЯ ДОСТАВКИ ───────────────────────────── */
        .delivery-section {
          padding: 100px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .delivery-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.35;
          background: #0082c8;
          filter: blur(140px);
          height: 50%;
          width: 35%;
          position: absolute;
          top: 10%;
          left: -15%;
          z-index: 0;
        }

        .delivery-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .delivery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 60px;
        }

        .delivery-block {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 32px;
        }

        .delivery-block h3 {
          color: #0082c8;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .delivery-block h3 .block-num {
          width: 28px;
          height: 28px;
          background: #0082c8;
          color: #002b36;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .delivery-block ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .delivery-block ul li {
          color: #aaa;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-left: 16px;
          position: relative;
        }

        .delivery-block ul li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: #0082c8;
          font-weight: 700;
        }

        .delivery-block ul li:last-child {
          border-bottom: none;
        }

        .delivery-block.full-width {
          grid-column: 1 / -1;
        }

        .delivery-block.warning {
          border-color: rgba(255, 85, 85, 0.25);
          background: rgba(255, 85, 85, 0.04);
        }

        .delivery-block.warning h3 {
          color: #ff5555;
        }

        .delivery-block.warning h3 .block-num {
          background: #ff5555;
        }

        .delivery-block.warning ul li::before {
          color: #ff5555;
        }

        .timing-highlight {
          color: #0082c8;
          font-weight: 700;
        }

        @media screen and (max-width: 767px) {
          .delivery-section {
            padding: 60px 16px;
          }
          .delivery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .delivery-block {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="photography-banner">
        <main>
          {/* ── СЛАЙД 1: HERO ── */}
          <section className="info-section">
            <div className="left-part">
              <h1>
                <span className="d-flex">
                  {["Т", "Е", "Х", "Н", "О"].map((char, index) => (
                    <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                      {char}
                    </span>
                  ))}
                </span>
                <span className="d-flex">
                  {["У", "С", "П", "Е", "Х"].map((char, index) => (
                    <span key={index} className="char tracking-tighter" style={{ animationDelay: `${(index + 5) * 0.08}s` }}>
                      {char}
                    </span>
                  ))}
                </span>
                <span className="text tracking-tighter">{currentText}</span>
              </h1>
              <p className="tracking-widest">
                Лидер дистрибьюции в России — надёжные поставки, широкий ассортимент и партнёрство, которому доверяют.
              </p>
              <a href="#delivery" className="book-link">
                <span className="linktext tracking-tighter text-3xl">Условия работы</span>
                <span className="arrow">
                  <span></span>
                </span>
              </a>
            </div>
            <div className="right-part">
              <div className="particles-container">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 20 + 15}s`,
                      animationDelay: `${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>
              <div className="bg-line">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(180deg) saturate(2)" }}
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(180deg) saturate(2)" }}
                />
              </div>
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  style={{ filter: "hue-rotate(180deg) saturate(2)" }}
                />
              </div>
            </div>
          </section>

          {/* ── СЛАЙД 2: ТАБЛИЦА ── */}
          <section className="table-section">
            <div className="table-container">
              <h2 className="section-title">
                Условия <span className="highlight">дистрибьюции</span>
              </h2>
              <table className="dist-table">
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>Условие</th>
                    <th>Сроки / Детали</th>
                    <th>Примечание</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Согласование заказа</td>
                    <td>Предварительно с менеджером</td>
                    <td>Ассортимент, сумма, способ оплаты, адрес и дата</td>
                    <td><span className="badge-blue">Обязательно</span></td>
                  </tr>
                  <tr>
                    <td>Комплектация и отправка</td>
                    <td>Только оплаченные заказы</td>
                    <td>После поступления оплаты</td>
                    <td><span className="badge-blue">Предоплата</span></td>
                  </tr>
                  <tr>
                    <td>Обработка заказа</td>
                    <td>При поступлении с 9:00 до 15:00 МСК</td>
                    <td>В течение 2 часов</td>
                    <td><span className="badge-yes">Быстро</span></td>
                  </tr>
                  <tr>
                    <td>Уведомление о доставке</td>
                    <td>Экспедитор звонит в день доставки</td>
                    <td>За 40 минут до прибытия</td>
                    <td><span className="badge-yes">Включено</span></td>
                  </tr>
                  <tr>
                    <td>Ожидание при разгрузке</td>
                    <td>Максимальное время ожидания</td>
                    <td>15 минут</td>
                    <td><span className="badge-blue">Стандарт</span></td>
                  </tr>
                  <tr>
                    <td>Ограниченный въезд</td>
                    <td>Заказчик обеспечивает пропуск</td>
                    <td>Иначе — доставка до зоны ограничения</td>
                    <td><span className="badge-no">Условие</span></td>
                  </tr>
                  <tr>
                    <td>Доставка «до двери»</td>
                    <td>При отсутствии ограничений ПДД</td>
                    <td>Подъезд по адресу доставки</td>
                    <td><span className="badge-yes">Возможно</span></td>
                  </tr>
                  <tr>
                    <td>Стройплощадки, вокзалы, СНТ</td>
                    <td>Доставка не осуществляется</td>
                    <td>—</td>
                    <td><span className="badge-no">Недоступно</span></td>
                  </tr>
                  <tr>
                    <td>Дороги без твёрдого покрытия</td>
                    <td>Доставка не осуществляется</td>
                    <td>—</td>
                    <td><span className="badge-no">Недоступно</span></td>
                  </tr>
                  <tr>
                    <td>Связь с клиентом</td>
                    <td>Обязательна для доставки</td>
                    <td>При недозвоне — доставка не осуществляется</td>
                    <td><span className="badge-no">Обязательно</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── СЛАЙД 3: УСЛОВИЯ ДОСТАВКИ ── */}
          <section className="delivery-section" id="delivery">
            <div className="delivery-container">
              <h2 className="section-title">
                Общие условия <span className="highlight">доставки</span>
              </h2>

              <div className="delivery-grid">
                <div className="delivery-block">
                  <h3>
                    <span className="block-num">1</span>
                    Согласование заказа
                  </h3>
                  <ul>
                    <li>Ассортимент заказанного товара</li>
                    <li>Сумма заказа</li>
                    <li>Способ оплаты</li>
                    <li>Адрес доставки</li>
                    <li>Дата доставки</li>
                  </ul>
                </div>

                <div className="delivery-block">
                  <h3>
                    <span className="block-num">2</span>
                    Сроки обработки
                  </h3>
                  <ul>
                    <li>На комплектацию выдаются только <span className="timing-highlight">оплаченные заказы</span></li>
                    <li>При поступлении с <span className="timing-highlight">9:00 до 15:00 МСК</span> — обработка в течение <span className="timing-highlight">2 часов</span></li>
                    <li>Счёт на оплату выставляется в те же сроки</li>
                  </ul>
                </div>

                <div className="delivery-block">
                  <h3>
                    <span className="block-num">3</span>
                    Процесс доставки
                  </h3>
                  <ul>
                    <li>Экспедитор звонит по контактному номеру в день доставки <span className="timing-highlight">за 40 минут</span> до прибытия</li>
                    <li>При невозможности принять груз — заранее уведомить менеджера</li>
                    <li>Максимальное ожидание экспедитором — <span className="timing-highlight">15 минут</span></li>
                    <li>При ограничениях въезда — заказчик обеспечивает пропуск</li>
                    <li>Без пропуска — доставка до зоны ограниченного въезда</li>
                    <li>Доставка «до двери» — при отсутствии ограничений ПДД</li>
                  </ul>
                </div>

                <div className="delivery-block warning">
                  <h3>
                    <span className="block-num">!</span>
                    Доставка не осуществляется
                  </h3>
                  <ul>
                    <li>На стройплощадки, вокзалы, садово-огородные товарищества, цеха, пункты общественного питания (кроме административных помещений)</li>
                    <li>На режимные, секретные и несуществующие объекты</li>
                    <li>В парки, леса, на пляжи и места без определённого адреса</li>
                    <li>Если проезд к месту передачи товара невозможен ближе чем на <span style={{color: '#ff5555', fontWeight: 700}}>100 метров</span></li>
                    <li>По дорогам с нетвёрдым покрытием</li>
                    <li>Если с клиентом не удалось связаться</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default PhotographyBanner
