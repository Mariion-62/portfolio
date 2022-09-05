import SDescription from './style';

export default function Description() {
  const currentYear = new Date().getFullYear() - 1990;
  return (
    <>
      <SDescription>
        <p className="contentDescription">
          Je m’appelle Marion, j’ai {currentYear} ans, je suis pacsée. Je suis
          curieuse, autonome, investie, dynamique. J’aime voyager, jouer au jeux
          vidéo, aux jeux de société, aller en concert, en festival mais aussi
          me poser devant une série, lire un bouquin ou écouter de la musique.
          <br />
          J’ai travaillé pendant 10 ans dans le domaine du sport adapté. J’ai
          décidé de faire une reconversion dans le domaine de l’IT pour me
          donner un nouveau challenge et m&apos; épanouir en tant que
          développeuse.
        </p>
      </SDescription>
    </>
  );
}
