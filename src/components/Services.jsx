const services = [
  { number: "01", icon: "⌘", title: "Web бағдарламалау", text: "HTML, CSS, JavaScript және React арқылы сайт жасауды үйрену." },
  { number: "02", icon: "⌁", title: "Python негіздері", text: "Python тілінің синтаксисі, алгоритмдер және шағын жобалар." },
  { number: "03", icon: "▦", title: "Компьютерлік сауаттылық", text: "Компьютермен тиімді жұмыс істеу және кеңсе бағдарламаларын меңгеру." }
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">БІЗДІҢ БАҒЫТТАР</p>
          <h2>Саған арналған <span>курстар</span></h2>
        </div>
        <p>Мақсатыңа сай бағытты таңдап, алғашқы қадамыңды жаса.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top"><span>{service.number}</span><span className="service-icon">{service.icon}</span></div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="#contact">Толығырақ <span>↗</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}