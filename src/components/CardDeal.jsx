import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Trouvez une carte plus avantageuse <br className="sm:block hidden" /> en quelques clics.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Renseignez vos besoins en quelques minutes et établissez votre carte de crédit sur-mesure.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
