import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/120603095_3300960699989831_2415232547947634802_n.jpg" alt="An image showing Tamas" width={300} height={300} />
            </div>
            <h1>Hi I'm Tamas</h1>
            <p>I blog about web development- especially frontend frameworks like Angular or React!</p>
        </section>
    )
}

export default Hero;