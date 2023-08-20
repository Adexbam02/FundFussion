import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="max sectionP">
      <div className="newsContent font2">
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn&apos;t anything embarrassing.
        </p>
        <form action="">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
